import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home/home.vue'
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
