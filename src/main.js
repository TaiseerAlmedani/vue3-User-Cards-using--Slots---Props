import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import Home from "@/views/HomeView.vue"
import About from "@/views/AboutView.vue"
import contact from "@/views/contactView.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component:contact },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.mount('#app')
