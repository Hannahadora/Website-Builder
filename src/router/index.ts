import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import Builder from '../views/builder.vue'
import Test from '../views/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/builder',
      name: 'builder',
      component: Builder
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
