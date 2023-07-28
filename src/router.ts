import { createRouter, createWebHistory } from 'vue-router'
import ModalVideoPage from './pages/ModalVideoPage.vue'
import PricingTablePage from './pages/PricingTablePage.vue'
import ParticleAnimationPage from './pages/ParticleAnimationPage.vue'
import SpotlightEffectPage from './pages/SpotlightEffectPage.vue'
import FancyTestimonialsSliderPage from './pages/FancyTestimonialsSliderPage.vue'
import VerticalTimelinesPage from './pages/VerticalTimelinesPage.vue'
import UnconventionalTabsPage from './pages/UnconventionalTabsPage.vue'
import FeatureComparisonPricingTablePage from './pages/FeatureComparisonPricingTablePage.vue'
import AnimatedAccordionPage from './pages/AnimatedAccordionPage.vue'
import RotatingWordsPage from './pages/RotatingWordsPage.vue'

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
    {
      path: '/fancy-testimonials-slider',
      component: FancyTestimonialsSliderPage
    },
    {
      path: '/vertical-timelines',
      component: VerticalTimelinesPage
    },
    {
      path: '/unconventional-tabs',
      component: UnconventionalTabsPage
    },
    {
      path: '/feature-comparison-pricing-table',
      component: FeatureComparisonPricingTablePage
    }, 
    {
      path: '/animated-accordion',
      component: AnimatedAccordionPage
    },
    {
      path: '/rotating-words',
      component: RotatingWordsPage
    },
  ]
})

export default router
