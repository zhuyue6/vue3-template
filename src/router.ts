import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const Home = import('./pages/home/index.vue')
const About = import('./pages/home/about.vue')

const routes: RouteRecordRaw[] = [
  { 
    path: '/home', component: Home,
    children: [{
      path: 'about', component: About
    }]
  },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router