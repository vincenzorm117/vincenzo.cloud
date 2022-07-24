import flipcoin from 'helpers/flipcoin'
import { clamp } from 'lodash'
import { useEffect, useRef } from 'react'

/* eslint-disable no-shadow */

const BlinkingGrid = ({
  children = null,
  colorDot = '#fff',
  bgColor = '#181818',
  gridDotDiameter = 2,
  gridGutterSize = 40,
  isDark = false,
}) => {
  const canvasRef = useRef(null)
  const canvasDimensions = useRef({ width: 0, height: 0 })
  const gridInfo = useRef({ xCount: 0, yCount: 0, nodeCount: 0 })
  const blinkingNodes = useRef({})
  const shouldReDrawGrid = useRef(true)

  useEffect(() => {
    shouldReDrawGrid.current = true
  }, [isDark])

  const getUnusedIndex = ({ blinkingNodes, gridInfo }) => {
    let index
    do {
      index = Math.floor(Math.random() * gridInfo.current.nodeCount)
    } while (blinkingNodes.current.hasOwnProperty(index))
    return index
  }

  const draw = (ctx, args) => {
    const { blinkingNodes, canvasDimensions, gridInfo } = args
    const { clientWidth, clientHeight } = ctx.canvas
    const { width, height } = canvasDimensions.current
    const space = gridGutterSize + gridDotDiameter

    if (
      shouldReDrawGrid.current ||
      clientWidth !== width ||
      clientHeight !== height
    ) {
      shouldReDrawGrid.current = false
      // Update dimensions
      canvasDimensions.current.width = clientWidth
      canvasDimensions.current.height = clientHeight
      ctx.canvas.setAttribute('width', clientWidth)
      ctx.canvas.setAttribute('height', clientHeight)

      // Update grid settings
      const xCount = Math.ceil(clientWidth / space)
      const yCount = Math.ceil(clientHeight / space)

      gridInfo.current.xCount = xCount
      gridInfo.current.yCount = yCount
      gridInfo.current.nodeCount = xCount * yCount

      // Draw background
      ctx.clearRect(0, 0, clientWidth, clientHeight)

      // Draw each node
      for (let x = 0; x < xCount; x += 1) {
        for (let y = 0; y < yCount; y += 1) {
          const index = x * yCount + y
          if (blinkingNodes.current.hasOwnProperty(index)) {
            ctx.globalAlpha = blinkingNodes.current[index].alpha
          } else {
            ctx.globalAlpha = 0.2
          }
          ctx.beginPath()
          ctx.rect(x * space, y * space, gridDotDiameter, gridDotDiameter)
          ctx.fillStyle = colorDot
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1
    } else {
      // Draw background

      // Draw each node
      for (const [i, blinkingNode] of Object.entries(blinkingNodes.current)) {
        if (blinkingNode.isDoneBlinking) {
          ctx.globalAlpha = 0.2
          delete blinkingNodes.current[i]
        } else {
          ctx.globalAlpha = blinkingNode.alpha
        }
        const x = blinkingNode.x * space
        const y = blinkingNode.y * space

        ctx.beginPath()
        ctx.clearRect(x, y, gridDotDiameter, gridDotDiameter)
        ctx.rect(x, y, gridDotDiameter, gridDotDiameter)
        ctx.fillStyle = colorDot
        ctx.fill()
      }
    }
  }

  const updateBlinkingNodes = (ctx, args) => {
    const { blinkingNodes } = args

    // Update currently active blinking dots
    for (const node of Object.values(blinkingNodes.current)) {
      // Calculate alpha value for node
      const t = (Date.now() - node.blinkStartTime.getTime()) / 1000
      const alpha =
        (2 * 0.6) / (Math.E ** (3 * (t - 2)) + Math.E ** (3 * (2 - t))) + 0.2

      // Set node alpha for drawing
      node.alpha = clamp(alpha, 0.2, 0.8)

      // Mark node for deletion
      blinkingNodes.current[node.index].isDoneBlinking = t > 6.0
    }

    // Add new blinking dots
    if (flipcoin(0.2)) {
      // Generate x and y coordinates for next blinking dot
      const index = getUnusedIndex(args)
      // const index = 750;
      blinkingNodes.current[index] = {
        index,
        blinkStartTime: new Date(),
        alpha: 0.2,
        isDoneBlinking: false,
        x: Math.floor(index / gridInfo.current.yCount),
        y: index % gridInfo.current.yCount,
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    const args = {
      blinkingNodes,
      canvasDimensions,
      gridInfo,
    }

    const render = () => {
      draw(context, args)
      updateBlinkingNodes(context, args)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [
    canvasRef.current,
    draw,
    blinkingNodes.current,
    canvasDimensions.current,
    gridInfo.current,
  ])

  return (
    <div style={{ background: bgColor }}>
      {children}
      <canvas className='w-full h-[80vh]' ref={canvasRef} />
    </div>
  )
}

export default BlinkingGrid

/* eslint-enable no-shadow */
