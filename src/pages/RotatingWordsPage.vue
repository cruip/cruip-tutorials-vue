<script setup lang="ts">
import RotatingWords from '../components/RotatingWords.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div class="text-center">

        <RotatingWords />

      </div>
    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/RotatingWords.vue" />
</template>