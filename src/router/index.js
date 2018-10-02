import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('@/views/home/index.vue')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: home
  }
]

const router = new VueRouter({
  routes
})

export default router
