import { useEffect, useRef } from "react";
import { clamp } from "lodash";
import flipcoin from "helpers/flipcoin";

const BlinkingGrid = ({ children = null }) => {
  const canvasRef = useRef(null);
  const canvasDimensions = useRef({ width: 0, height: 0 });

  const nodes = useRef([]);
  const blinkingNodes = useRef({});

  const draw = (ctx, args) => {
    const { nodes, blinkingNodes, canvasDimensions } = args;
    const { clientWidth, clientHeight } = ctx.canvas;
    const { width, height } = canvasDimensions;

    if (clientWidth !== width || clientHeight !== height) {
      // Update dimensions
      canvasDimensions.current.width = clientWidth;
      canvasDimensions.current.height = clientHeight;
      ctx.canvas.setAttribute("width", clientWidth);
      ctx.canvas.setAttribute("height", clientHeight);

      // Refresh nodes
      refreshNodes(args);
    }

    // Draw background
    ctx.clearRect(0, 0, clientWidth, clientHeight);

    // Draw each node
    const constant_2pi = 2 * Math.PI;
    for (let i = 0; i < nodes.current.length; i++) {
      const node = nodes.current[i];
      if (blinkingNodes.current.hasOwnProperty(i)) {
        ctx.globalAlpha = blinkingNodes.current[i].alpha;
      } else {
        ctx.globalAlpha = 0.2;
      }
      ctx.beginPath();
      ctx.arc(node.x, node.y, 1, 0, constant_2pi, false);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
    for (let node of nodes.current) {
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 1, 0, constant_2pi, false);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  const refreshNodes = (args) => {
    const { canvasDimensions, nodes } = args;
    // Get grid settings
    const space = 40 + 1;
    const xCount = Math.ceil(canvasDimensions.current.width / space);
    const yCount = Math.ceil(canvasDimensions.current.height / space);

    // Set nodes
    nodes.current = [];
    let index = 0;
    for (let i = 0; i < xCount; i++) {
      for (let j = 0; j < yCount; j++) {
        nodes.current.push({
          x: i * space,
          y: j * space,
          index,
        });
        index += 1;
      }
    }
  };

  const getUnusedIndex = ({ nodes, blinkingNodes }) => {
    let index;
    do {
      index = Math.floor(Math.random() * nodes.current.length);
    } while (blinkingNodes.current.hasOwnProperty(index));
    return index;
  };

  const updateBlinkingNodes = (ctx, args) => {
    const { blinkingNodes } = args;

    // Update currently active blinking dots
    for (const node of Object.values(blinkingNodes.current)) {
      var t = (Date.now() - node.blinkStartTime.getTime()) / 1700;
      var alpha =
        (2 * 0.6) /
          (Math.pow(Math.E, 3 * (t - 2)) + Math.pow(Math.E, 3 * (2 - t))) +
        0.2;

      node.alpha = clamp(alpha, 0.2, 0.8);

      // Remove from list if done blinking
      if (3.0 < t) {
        delete blinkingNodes.current[node.index];
      }
    }

    // Add new blinking dots
    if (flipcoin(0.1)) {
      // Generate x and y coordinates for next blinking dot
      const index = getUnusedIndex(args);
      // const index = 750;
      blinkingNodes.current[index] = {
        index,
        blinkStartTime: new Date(),
        alpha: 0.2,
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;
    const args = {
      nodes: nodes,
      blinkingNodes: blinkingNodes,
      canvasDimensions: canvasDimensions,
    };

    const render = () => {
      draw(context, args);
      updateBlinkingNodes(context, args);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [
    canvasRef.current,
    draw,
    nodes.current,
    blinkingNodes.current,
    canvasDimensions.current,
  ]);

  return (
    <div className="bg-[#181818]">
      {children}
      <canvas className="w-full h-[80vh]" ref={canvasRef} />
    </div>
  );
};

export default BlinkingGrid;
