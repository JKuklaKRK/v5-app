import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultContainer from '../views/containers/DefaultContainer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/#/',
    name: 'DefaultContainer',
    component: DefaultContainer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
