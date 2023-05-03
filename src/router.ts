import { createRouter, createWebHistory } from 'vue-router'
import ModalVideoPage from './pages/ModalVideoPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/modal-video',
      component: ModalVideoPage
    },
  ]
})

export default router
