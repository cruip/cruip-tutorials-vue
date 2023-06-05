<script setup lang="ts">
import TestimonialImg01 from '../assets/testimonial-01.jpg'
import TestimonialImg02 from '../assets/testimonial-02.jpg'
import TestimonialImg03 from '../assets/testimonial-03.jpg'
import FancyTestimonialsSlider from '../components/FancyTestimonialsSlider.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'

const testimonials = [
  {
    img: TestimonialImg01,
    quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to be able to select between formats.ture responses is a game-changer.",
    name: 'Jessie J',
    role: 'Ltd Head of Product'
  },
  {
    img: TestimonialImg02,
    quote: "I have been using this product for a few weeks now and I am blown away by the results. My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.",
    name: 'Mark Luk',
    role: 'Spark Founder & CEO'
  },
  {
    img: TestimonialImg03,
    quote: "As a busy professional, I don't have a lot of time to devote to working out. But with this fitness program, I have seen amazing results in just a few short weeks. The workouts are efficient and effective.",
    name: 'Jeff Kahl',
    role: 'Appy Product Lead'
  }
]
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div class="flex justify-center">
        <FancyTestimonialsSlider :testimonials="testimonials" />
      </div>
    </div>
  </main>
  <Footer />
  <Banner tutorialUrl="https://cruip.com/how-to-build-a-modal-video-component-with-tailwind-css-and-vue/" downloadUrl="https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/FancyTestimonialsSlider.vue" />
</template>