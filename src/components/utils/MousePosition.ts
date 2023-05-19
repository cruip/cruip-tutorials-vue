import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function useMousePosition() {
  const mousePosition = ref < { x: number; y: number } > ({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.value = { x: event.clientX, y: event.clientY }
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return mousePosition
}
