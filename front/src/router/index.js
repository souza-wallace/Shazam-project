import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/search.vue')
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: () => import('../views/artist.vue')
    },
  ]
})

export default router
