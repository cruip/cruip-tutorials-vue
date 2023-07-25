<script setup lang="ts">
import Accordion from '../components/Accordion.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'

const faqs = [
  {
    title: "What are the advantages of your service?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "Are there any fees or commissions in addition to the monthly subscription?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "You really don't charge per user? Why not?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "What happens when I go over my monthly active limit?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: true,
  },
  {
    title: "Can your service help me understand how to work with my product?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "Which third-party application do you integrate with?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },
  {
    title: "I have another question!",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
  },    
]
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">

      <h1 class="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>

      <div class="divide-y divide-slate-200">
        <template v-for="(faq, index) in faqs">
          <Accordion :title="faq.title" :id="`faqs-${index}`" :active="faq.active">
            {{ faq.text }}
          </Accordion>
        </template>
      </div>

    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/building-a-simple-animated-accordion-component-with-tailwind-css/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/Accordion.vue" />
</template>