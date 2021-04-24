import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
/* import About from './views/About.vue' */
import TermEntry from './views/TermEntry.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    /*     { path: '/about', component: About }, */
    { path: '/term/:id', component: TermEntry },
  ],
})
