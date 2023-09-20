<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const containerRef = ref<HTMLCanvasElement | null>(null)
const containerProps = ref({ height: 0, top: 0, bottom: 0 })
const sections = ref<Array<HTMLElement>>([])
const viewportTop = ref(0)
const activeIndex = ref(0)
const scrollValue = ref(0)

onMounted(() => {
  if (containerRef.value) {
    sections.value = Array.from(containerRef.value.querySelectorAll('section')).map((el) => el as HTMLElement)
  }
  initContainer()
  handleSections()

  window.addEventListener('scroll', handleSections)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleSections)
})

const initContainer = () => {
  if (containerRef.value) {
    containerRef.value.style.setProperty('--stick-items', `${sections.value.length + 1}00vh`)
    containerRef.value.classList.remove('hidden')
  }
}

const handleSections = () => {
  if (containerRef.value && sections.value) {
    viewportTop.value = window.scrollY
    containerProps.value.height = containerRef.value.clientHeight
    containerProps.value.top = containerRef.value.offsetTop
    containerProps.value.bottom = containerProps.value.top + containerProps.value.height

    if (containerProps.value.bottom <= viewportTop.value) {
      scrollValue.value = sections.value.length + 1
    } else if (containerProps.value.top >= viewportTop.value) {
      scrollValue.value = 0
    } else {
      scrollValue.value = remapValue(viewportTop.value, containerProps.value.top, containerProps.value.bottom, 0, sections.value.length + 1)
    }
    activeIndex.value = Math.floor(scrollValue.value) >= sections.value.length ? sections.value.length - 1 : Math.floor(scrollValue.value)

    sections.value.forEach((section, i) => {
      if (i === activeIndex.value) {
        section.style.setProperty('--stick-visibility', '1')
        section.style.setProperty('--stick-scale', '1')
      } else {
        section.style.setProperty('--stick-visibility', '0')
        section.style.setProperty('--stick-scale', '.8')
      }
    })
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
</script>


<template>
  <div ref="containerRef">
    <slot></slot>
  </div>
</template>