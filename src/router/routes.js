import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home/home.vue'
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/project/:slug', name: 'ProjectDetail', component: ProjectDetail, props: true },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
