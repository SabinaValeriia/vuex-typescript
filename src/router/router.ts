import Vue from 'vue'
import VueRouter from 'vue-router'
import HotelView from '../views/HotelView.vue'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import GoogleMap from '../components/GoogleMap.vue'

Vue.use(VueRouter)

const routes  = [
  {
    path: '/hotel',
    name: 'hotel',
    component: HotelView
  },
  {
    path: '/map',
    name: 'map',
    component: GoogleMap
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router