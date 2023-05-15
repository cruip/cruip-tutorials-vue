<script setup lang="ts">
import PricingTable from '../components/PricingTable.vue';
import Banner from '../components/Banner.vue'
</script>

<template>
  <main class="my-6">
    <div class="w-full max-w-6xl mx-auto">
      <PricingTable />
    </div>
  </main>
  <footer class="h-6">
    <div class="w-full max-w-6xl mx-auto">
      <a class="text-xs text-slate-500 hover:text-slate-800 transition-colors duration-150" href="https://cruip.com">&copy;Cruip - Tailwind CSS templates</a>
    </div>
  </footer>
  <Banner tutorialUrl="https://cruip.com/how-to-build-a-modal-video-component-with-tailwind-css-and-vue/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/ModalVideo.vue" />
</template>