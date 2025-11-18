import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import KoolitusPage from '../pages/KoolitusPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/koolitus', name: 'koolitus', component: KoolitusPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
