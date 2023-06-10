import { createRouter, createWebHistory } from 'vue-router'
import ConversorView from '../views/ConversorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'conversor',
      component: ConversorView
    },
    {
      path: '/historial',
      name: 'historial',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
