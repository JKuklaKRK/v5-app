import Vue from 'vue'
import VueRouter from 'vue-router'
//import DefaultContainer from '../views/containers/DefaultContainer'
import Home from '../views/pages/Home'
import Creator from '../views/pages/Creator'
import ClanIntros from '../views/pages/ClanIntros'
import ClansIntro from '../views/pages/ClansIntro'
import DiceRoller from '../views/pages/DiceRoller'

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
  },
  {
    path: '/clan-intros',
    name: 'ClanIntros',
    component: ClanIntros
  },
  {
    path: '/clans-intro/:clan',
    name: 'ClansIntro',
    component: ClansIntro
  },
  {
    path: '/dice-roller',
    name: 'DiceRoller',
    component: DiceRoller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
