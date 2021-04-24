import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
/* import About from './pages/About.vue' */
import TermEntry from './pages/TermEntry.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    /*     { path: '/about', component: About }, */
    { path: '/term/:id', component: TermEntry },
  ],
})
