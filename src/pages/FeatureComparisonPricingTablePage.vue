<script setup lang="ts">
import FeaturesComparisonPricing from '../components/FeaturesComparisonPricing.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <FeaturesComparisonPricing />
    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/how-to-create-a-feature-comparison-table-with-tailwind-css/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/FeaturesComparisonPricing.vue" />
</template>