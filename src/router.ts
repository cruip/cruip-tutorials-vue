import { createRouter, createWebHistory } from 'vue-router'
import ModalVideoPage from './pages/ModalVideoPage.vue'
import PricingTablePage from './pages/PricingTablePage.vue'
import ParticleAnimationPage from './pages/ParticleAnimationPage.vue'
import SpotlightEffectPage from './pages/SpotlightEffectPage.vue'

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
    {
      path: '/particle-animation',
      component: ParticleAnimationPage
    },
    {
      path: '/spotlight-effect',
      component: SpotlightEffectPage
    },     
  ]
})

export default router
