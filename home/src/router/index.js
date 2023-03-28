import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/feeds',
    name: 'FeedsView',
    component: () => import('../views/FeedView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
