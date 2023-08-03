<script setup lang="ts">
import Facebook from '../assets/facebook.svg'
import Disney from '../assets/disney.svg'
import Airbnb from '../assets/airbnb.svg'
import Apple from '../assets/apple.svg'
import Spark from '../assets/spark.svg'
import Samsung from '../assets/samsung.svg'
import Quora from '../assets/quora.svg'
import Sass from '../assets/sass.svg'

const logos = [
  { src: Facebook, alt: 'Facebook' },
  { src: Disney, alt: 'Disney' },
  { src: Airbnb, alt: 'Airbnb' },
  { src: Apple, alt: 'Apple' },
  { src: Spark, alt: 'Spark' },
  { src: Samsung, alt: 'Samsung' },
  { src: Quora, alt: 'Quora' },
  { src: Sass, alt: 'Sass' },
]
</script>

<template>
  <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      <template v-for="logo in logos">
        <li>
          <img :src="logo.src" :alt="logo.alt" />
        </li>
      </template>
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      <template v-for="logo in logos">
        <li>
          <img :src="logo.src" :alt="logo.alt" />
        </li>
      </template>
    </ul>    
  </div>
</template>
