<script setup lang="ts">
import Tab01 from '../assets/tabs-image-01.jpg'
import Tab02 from '../assets/tabs-image-02.jpg'
import Tab03 from '../assets/tabs-image-03.jpg'
import UnconventionalTabs from '../components/UnconventionalTabs.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'

const tabs = [
  {
    title: 'Lassen Peak',
    img: Tab01,
    tag: 'Mountain',
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: '#0'
  },
  {
    title: 'Mount Shasta',
    img: Tab02,
    tag: 'Mountain',
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: '#0'
  },
  {
    title: 'Eureka Peak',
    img: Tab03,
    tag: 'Mountain',
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: '#0'
  },    
]
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <UnconventionalTabs :tabs="tabs" />
    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/using-tailwind-css-and-vue-to-create-animated-and-accessible-tabs/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/UnconventionalTabs.vue" />
</template>