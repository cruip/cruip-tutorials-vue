import { createRouter, createWebHistory } from 'vue-router'
import VideoModalPage from './pages/VideoModalPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/video-modal',
      component: VideoModalPage
    },
  ]
})

export default router
