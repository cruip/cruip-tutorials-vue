<script setup lang="ts">
import SilderImg01 from '../assets/ps-image-01.png'
import SilderImg02 from '../assets/ps-image-02.png'
import SilderImg03 from '../assets/ps-image-03.png'
import SilderImg04 from '../assets/ps-image-04.png'
import SilderIcon01 from '../assets/ps-icon-01.svg'
import SilderIcon02 from '../assets/ps-icon-02.svg'
import SilderIcon03 from '../assets/ps-icon-03.svg'
import SilderIcon04 from '../assets/ps-icon-04.svg'
import ProgressSlider from '../components/ProgressSlider.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'

const items = [
  {
    img: SilderImg01,
    desc: 'Omnichannel',
    buttonIcon: SilderIcon01,
  },
  {
    img: SilderImg02,
    desc: 'Multilingual',
    buttonIcon: SilderIcon02,
  },
  {
    img: SilderImg03,
    desc: 'Interpolate',
    buttonIcon: SilderIcon03,
  },
  {
    img: SilderImg04,
    desc: 'Enriched',
    buttonIcon: SilderIcon04,
  },
]
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div class="flex justify-center">
        <ProgressSlider :items="items" />
      </div>
    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/create-a-carousel-with-progress-indicators-using-tailwind-and-vue/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/ProgressSlider.vue" />
</template>