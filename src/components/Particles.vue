<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue'
import useMousePosition from './utils/MousePosition'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const canvasContainerRef = ref<HTMLDivElement | null>(null)
const context = ref<CanvasRenderingContext2D | null>(null)
const circles = ref<any[]>([])
const mousePosition = useMousePosition()
const mouse = reactive<{ x: number; y: number }>({ x: 0, y: 0 })
const canvasSize = reactive<{ w: number; h: number }>({ w: 0, h: 0 })
const dpr = window.devicePixelRatio || 1

onMounted(() => {
  if (canvasRef.value) {
    context.value = canvasRef.value.getContext('2d')
  }
  initCanvas()
  animate()
  window.addEventListener('resize', initCanvas)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', initCanvas)
})

watch(
  () => mousePosition.value,
  () => {
    onMouseMove()
  }
)

const initCanvas = () => {
  resizeCanvas()
  drawParticles()
}

const onMouseMove = () => {
  if (canvasRef.value) {
    const rect = canvasRef.value.getBoundingClientRect()
    const { w, h } = canvasSize
    const x = mousePosition.value.x - rect.left - w / 2
    const y = mousePosition.value.y - rect.top - h / 2
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
    if (inside) {
      mouse.x = x
      mouse.y = y
    }
  }
}

const resizeCanvas = () => {
  if (canvasContainerRef.value && canvasRef.value && context.value) {
    circles.value.length = 0
    canvasSize.w = canvasContainerRef.value.offsetWidth
    canvasSize.h = canvasContainerRef.value.offsetHeight
    canvasRef.value.width = canvasSize.w * dpr
    canvasRef.value.height = canvasSize.h * dpr
    canvasRef.value.style.width = canvasSize.w + 'px'
    canvasRef.value.style.height = canvasSize.h + 'px'
    context.value.scale(dpr, dpr)
  }
}

type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

const circleParams = (): Circle => {
  const x = Math.floor(Math.random() * canvasSize.w)
  const y = Math.floor(Math.random() * canvasSize.h)
  const translateX = 0
  const translateY = 0
  const size = Math.floor(Math.random() * 2) + 1
  const alpha = 0
  const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
  const dx = (Math.random() - 0.5) * 0.2
  const dy = (Math.random() - 0.5) * 0.2
  const magnetism = 0.1 + Math.random() * 4
  return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism }
}

const drawCircle = (circle: Circle, update = false) => {
  if (context.value) {
    const { x, y, translateX, translateY, size, alpha } = circle
    context.value.translate(translateX, translateY)
    context.value.beginPath()
    context.value.arc(x, y, size, 0, 2 * Math.PI)
    context.value.fillStyle = `rgba(255, 255, 255, ${alpha})`
    context.value.fill()
    context.value.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!update) {
      circles.value.push(circle)
    }
  }
}

const clearContext = () => {
  if (context.value) {
    context.value.clearRect(0, 0, canvasSize.w, canvasSize.h)
  }
}

const drawParticles = () => {
  clearContext()
  const particleCount = props.quantity
  for (let i = 0; i < particleCount; i++) {
    const circle = circleParams()
    drawCircle(circle)
  }
}

const remapValue = (
  value: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number
): number => {
  const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
  return remapped > 0 ? remapped : 0
}

const animate = () => {
  clearContext()
  circles.value.forEach((circle, i) => {
    // Handle the alpha value
    const edge = [
      circle.x + circle.translateX - circle.size, // distance from left edge
      canvasSize.w - circle.x - circle.translateX - circle.size, // distance from right edge
      circle.y + circle.translateY - circle.size, // distance from top edge
      canvasSize.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
    ]
    const closestEdge = edge.reduce((a, b) => Math.min(a, b))
    const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))
    if (remapClosestEdge > 1) {
      circle.alpha += 0.02
      if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha
    } else {
      circle.alpha = circle.targetAlpha * remapClosestEdge
    }
    circle.x += circle.dx
    circle.y += circle.dy
    circle.translateX += ((mouse.x / (props.staticity / circle.magnetism)) - circle.translateX) / props.ease
    circle.translateY += ((mouse.y / (props.staticity / circle.magnetism)) - circle.translateY) / props.ease
    // circle gets out of the canvas
    if (
      circle.x < -circle.size ||
      circle.x > canvasSize.w + circle.size ||
      circle.y < -circle.size ||
      circle.y > canvasSize.h + circle.size
    ) {
      // remove the circle from the array
      circles.value.splice(i, 1)
      // create a new circle
      const newCircle = circleParams()
      drawCircle(newCircle)
      // update the circle position
    } else {
      drawCircle(
        {
          ...circle,
          x: circle.x,
          y: circle.y,
          translateX: circle.translateX,
          translateY: circle.translateY,
          alpha: circle.alpha,
        },
        true
      )
    }
  })
  window.requestAnimationFrame(animate)
}

interface Props {
  quantity?: number
  staticity?: number
  ease?: number
}

const props = withDefaults(defineProps<Props>(), {
  quantity: 30,
  staticity: 50,
  ease: 50,
})
</script>


<template>
  <div ref="canvasContainerRef" aria-hidden="true">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>