<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const duration: number = 5000
const itemsRef = ref<HTMLCanvasElement | null>(null)
const frame = ref<number>(0)
const firstFrameTime = ref(performance.now())
const active = ref<number>(0)
const progress = ref<number>(0)

interface Item {
  img: string
  desc: string
  buttonIcon: string
}

const props = defineProps<{
  items: Item[]
}>()

const items = props.items

const startAnimation = () => {
  firstFrameTime.value = performance.now()
  frame.value = requestAnimationFrame(animate)
}

const animate = (now: number) => {
  let timeDifference = now - firstFrameTime.value
  let timeFraction = Math.max(0, timeDifference) / duration
  if (timeFraction <= 1) {
    progress.value = timeFraction * 100
    frame.value = requestAnimationFrame(animate)
  } else {
    timeFraction = 1
    progress.value = 0
    active.value = (active.value + 1) % items.length
  }
}

const heightFix = async () => {
  await nextTick()
  if (itemsRef.value && itemsRef.value.parentElement) itemsRef.value.parentElement.style.height = `${itemsRef.value.clientHeight}px`
}

onMounted(() => startAnimation())

onUnmounted(() => cancelAnimationFrame(frame.value))

watch(active, () => {
  cancelAnimationFrame(frame.value)
  startAnimation()
})
</script>

<template>
  <div class="w-full max-w-5xl mx-auto text-center">
    <!-- Item image -->
    <div class="transition-all duration-150 delay-300 ease-in-out">
      <div class="relative flex flex-col" ref="itemsRef">

        <template :key="index" v-for="(item, index) in items">
          <TransitionRoot :show="active === index" enter="transition ease-in-out duration-500 delay-200 order-first" enterFrom="opacity-0 scale-105" enterTo="opacity-100 scale-100" leave="transition ease-in-out duration-300 absolute" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" @before-enter="heightFix()">
            <img class="rounded-xl" :src="item.img" width="1024" height="576" :alt="item.desc">
          </TransitionRoot>
        </template>

      </div>
    </div>
    <!-- Buttons -->
    <div class="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <template :key="index" v-for="(item, index) in items">
        <button class="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group" @click="active = index">
          <span class="text-center flex flex-col items-center" :class="active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'">
            <span class="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
              <img :src="item.buttonIcon" :alt="item.desc">
            </span>
            <span class="block text-sm font-medium text-slate-900 mb-2">{{ item.desc }}</span>
            <span class="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" :aria-valuenow="active === index ? progress : 0" aria-valuemin="0" aria-valuemax="100">
              <span class="absolute inset-0 bg-indigo-500 rounded-[inherit]" :style="`${active === index ? `width: ${progress}%` : 'width: 0%'}`"></span>
            </span>
          </span>
        </button>
      </template>
    </div>
  </div>
</template>