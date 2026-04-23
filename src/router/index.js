import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LegacyPage from '../views/LegacyPage.vue'

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/main', name: 'main', component: LegacyPage, props: { title: 'main.html', file: 'main.html' } },
  { path: '/login', name: 'login', component: LegacyPage, props: { title: 'login.html', file: 'login.html' } },
  { path: '/register', name: 'register', component: LegacyPage, props: { title: 'register.html', file: 'register.html' } },
  { path: '/resume', name: 'resume', component: LegacyPage, props: { title: 'resume.html', file: 'resume.html' } },
  { path: '/study', name: 'study', component: LegacyPage, props: { title: 'study.html', file: 'study.html' } },
  { path: '/life', name: 'life', component: LegacyPage, props: { title: 'life.html', file: 'life.html' } },
  { path: '/ideal', name: 'ideal', component: LegacyPage, props: { title: 'ideal.html', file: 'ideal.html' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
