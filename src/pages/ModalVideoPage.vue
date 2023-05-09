<script setup lang="ts">
import ModalVideo from '../components/ModalVideo.vue'
import Banner from '../components/Banner.vue'
import VideoThumb from '../assets/modal-video-thumb.jpg'
import VideoSrc from '../assets/video.mp4'
</script>

<template>
  <main class="my-6">
    <div class="w-full max-w-6xl mx-auto">
      <ModalVideo :thumb="VideoThumb" :thumbWidth="768" :thumbHeight="432" thumbAlt="Modal video thumbnail" :video="VideoSrc" :videoWidth="1920" :videoHeight="1080" />
    </div>
  </main>
  <footer class="h-6">
    <div class="w-full max-w-6xl mx-auto">
      <a class="text-xs text-slate-500 hover:text-slate-800 transition-colors duration-150" href="https://cruip.com">&copy;Cruip - Tailwind CSS templates</a>
    </div>
  </footer>
  <Banner tutorialUrl="https://cruip.com/how-to-build-a-modal-video-component-with-tailwind-css-and-vue/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/ModalVideo.vue" />
</template>