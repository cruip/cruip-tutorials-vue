<script setup lang="ts">
import ModalVideo from '../components/ModalVideo.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
import VideoThumb from '../assets/modal-video-thumb.jpg'
import VideoSrc from '../assets/video.mp4'
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center bg-slate-50">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div class="flex justify-center">
        <ModalVideo :thumb="VideoThumb" :thumbWidth="768" :thumbHeight="432" thumbAlt="Modal video thumbnail" :video="VideoSrc" :videoWidth="1920" :videoHeight="1080" />
      </div>
    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/how-to-build-a-modal-video-component-with-tailwind-css-and-vue/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/ModalVideo.vue" />
</template>