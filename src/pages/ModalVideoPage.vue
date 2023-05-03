<script setup lang="ts">
import ModalVideo from '../components/ModalVideo.vue'
import VideoThumb from '../assets/modal-video-thumb.jpg'
import VideoSrc from '../assets/video.mp4'
</script>

<template>
  <ModalVideo :thumb="VideoThumb" :thumbWidth="768" :thumbHeight="432" :video="VideoSrc" :videoWidth="1920" :videoHeight="1080"  />
</template>