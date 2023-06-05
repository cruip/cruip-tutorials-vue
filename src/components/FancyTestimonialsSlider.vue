<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const testimonialsRef = ref<HTMLCanvasElement | null>(null)
const active = ref<number>(0)
const autorotate = ref<boolean>(true)
const autorotateTiming = ref<number>(7000)
let interval: number

interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

const props = defineProps<{
  testimonials: Testimonial[]
}>()

const testimonials = props.testimonials

const heightFix = () => {  
  setTimeout(() => {
    if (testimonialsRef.value && testimonialsRef.value.parentElement) testimonialsRef.value.parentElement.style.height = `${testimonialsRef.value.clientHeight}px`
  }, 1)
}

const stopAutorotate = () => {
  autorotate.value = false
  clearInterval(interval)
}

onMounted(() => {      
  if (!autorotate.value) return
  interval = setInterval(() => {
    active.value = active.value + 1 === testimonials.length ? 0 : active.value + 1
  }, autorotateTiming.value)
})

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <div class="w-full max-w-3xl mx-auto text-center">
    <!-- Testimonial image -->
    <div class="relative h-32">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
          <div class="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

            <template :key="index" v-for="(testimonial, index) in testimonials">
              <TransitionRoot
                :show="active === index"
                class="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <img class="relative top-11 left-1/2 -translate-x-1/2 rounded-full" :src="testimonial.img" width="56" height="56" :alt="testimonial.name" />
              </TransitionRoot>
            </template>

        </div>
      </div>
    </div>
    <!-- Text -->
    <div class="mb-9 transition-all duration-150 delay-300 ease-in-out">
      <div class="relative flex flex-col" ref="testimonialsRef">

        <template :key="index" v-for="(testimonial, index) in testimonials">
          <TransitionRoot
            :show="active === index"
            enter="transition ease-in-out duration-500 delay-200 order-first"
            enterFrom="opacity-0 -translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-out duration-300 delay-300 absolute"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-4"
            @before-enter="heightFix()"
          >
            <div class="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">{{ testimonial.quote }}</div>
          </TransitionRoot>          
        </template>

      </div>
    </div>
    <!-- Buttons -->
    <div class="flex flex-wrap justify-center -m-1.5">
      <template :key="index" v-for="(testimonial, index) in testimonials">
        <button
          class="inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
          :class="active === index ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'"
          @click="active = index; stopAutorotate();"
        >
          <span>{{ testimonial.name }}</span> <span :class="active === index ? 'text-indigo-200' : 'text-slate-300'">-</span> <span>{{ testimonial.role }}</span>
        </button>
      </template>
    </div>
  </div>
</template>