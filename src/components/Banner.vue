<script setup lang="ts">
import { ref } from 'vue'
const bannerOpen = ref<boolean>(true)

interface Props {
  tutorialUrl: string
  downloadUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50" :class="bannerOpen ? '' : 'hidden'">
    <div class="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
      <div class="text-slate-500 inline-flex">
        <a class="font-medium hover:underline text-slate-300" :href="props.tutorialUrl">
          Read Tutorial
        </a>
        <span class="italic px-1.5">or</span>
        <a class="font-medium hover:underline text-indigo-500 flex items-center" :href="props.downloadUrl" target="_blank" rel="noreferrer">
          <span>Download</span>
          <svg class="fill-indigo-400 ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
            <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
          </svg>
        </a>
      </div>
      <button class="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700" @click="bannerOpen = false">
        <span class="sr-only">Close</span>
        <svg class="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
          <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
        </svg>
      </button>
    </div>
  </div>
</template>
