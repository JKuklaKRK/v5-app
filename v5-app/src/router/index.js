import Vue from 'vue'
import VueRouter from 'vue-router'
//import DefaultContainer from '../views/containers/DefaultContainer'
import Home from '../views/pages/Home'
import Creator from '../views/pages/Creator'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Home
  },
  {
    path: '/creator',
    name: 'Creator',
    component: Creator
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
