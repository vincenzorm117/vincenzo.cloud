import { useEffect, useRef } from "react";
import { clamp } from "lodash";
import flipcoin from "helpers/flipcoin";

const BlinkingGrid = ({ children = null }) => {
  const canvasRef = useRef(null);
  const canvasDimensions = useRef({ width: 0, height: 0 });
  const gridInfo = useRef({ xCount: 0, yCount: 0, nodeCount: 0 });
  const blinkingNodes = useRef({});

  const getUnusedIndex = ({ blinkingNodes, gridInfo }) => {
    let index;
    do {
      index = Math.floor(Math.random() * gridInfo.current.nodeCount);
    } while (blinkingNodes.current.hasOwnProperty(index));
    return index;
  };

  const draw = (ctx, args) => {
    const { blinkingNodes, canvasDimensions, gridInfo } = args;
    const { clientWidth, clientHeight } = ctx.canvas;
    const { width, height } = canvasDimensions.current;
    const { xCount, yCount } = gridInfo.current;
    const space = 40 + 1;

    if (clientWidth !== width || clientHeight !== height) {
      // Update dimensions
      canvasDimensions.current.width = clientWidth;
      canvasDimensions.current.height = clientHeight;
      ctx.canvas.setAttribute("width", clientWidth);
      ctx.canvas.setAttribute("height", clientHeight);

      // Update grid settings
      const xCount = Math.ceil(clientWidth / space);
      const yCount = Math.ceil(clientHeight / space);

      gridInfo.current.xCount = xCount;
      gridInfo.current.yCount = yCount;
      gridInfo.current.nodeCount = xCount * yCount;
    }

    // Draw background
    ctx.clearRect(0, 0, clientWidth, clientHeight);

    // Draw each node
    const constant_2pi = 2 * Math.PI;

    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        let index = x * yCount + y;
        if (blinkingNodes.current.hasOwnProperty(index)) {
          ctx.globalAlpha = blinkingNodes.current[index].alpha;
        } else {
          ctx.globalAlpha = 0.2;
        }
        // ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(x * space, y * space, 1, 0, constant_2pi, false);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
  };

  const updateBlinkingNodes = (ctx, args) => {
    const { blinkingNodes } = args;

    // Update currently active blinking dots
    for (const node of Object.values(blinkingNodes.current)) {
      var t = (Date.now() - node.blinkStartTime.getTime()) / 1000;
      var alpha =
        (2 * 0.6) /
          (Math.pow(Math.E, 3 * (t - 2)) + Math.pow(Math.E, 3 * (2 - t))) +
        0.2;

      node.alpha = clamp(alpha, 0.2, 0.8);

      // Remove from list if done blinking
      if (6.0 < t) {
        delete blinkingNodes.current[node.index];
      }
    }

    // Add new blinking dots
    if (flipcoin(0.2)) {
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
      blinkingNodes,
      canvasDimensions,
      gridInfo,
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
    blinkingNodes.current,
    canvasDimensions.current,
    gridInfo.current,
  ]);

  return (
    <div className="bg-[#181818]">
      {children}
      <canvas className="w-full h-[80vh]" ref={canvasRef} />
    </div>
  );
};

export default BlinkingGrid;
