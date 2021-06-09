import Vue from 'vue'
import VueRouter from 'vue-router'
import M2 from '../components/map2d'
import M3 from '../components/map3d'

Vue.use(VueRouter)

const routes = [
  {
    path: '/m2',
    name: 'm2',
    component: M2
  },
  {
    path: '/m3',
    name: 'M3',
    component: M3
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
