<script setup lang="ts">
import PricingTable from '../components/PricingTable.vue';
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <PricingTable />
    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/how-to-create-a-pricing-table-with-a-monthly-yearly-toggle-in-tailwind-css-and-vue/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/PricingTable.vue" />
</template>