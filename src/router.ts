import { createRouter, createWebHistory } from 'vue-router'
import ModalVideoPage from './pages/ModalVideoPage.vue'
import PricingTablePage from './pages/PricingTablePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/modal-video',
      component: ModalVideoPage
    },
    {
      path: '/pricing-table',
      component: PricingTablePage
    },    
  ]
})

export default router
