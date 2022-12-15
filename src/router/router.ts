import Vue from 'vue'
import VueRouter from 'vue-router'
import HotelView from '../views/HotelView.vue'
import HomeView from '../views/HomeView.vue'
import HotelPropsView from '../views/HotelPropsView.vue'
import UsersView from '../views/UsersView.vue'
import GoogleMap from '../components/GoogleMap.vue'
import Company from '../components/Company.vue'
import App from '../components/App.vue'
import Parent from '../components/Parent.vue'

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
  {
    path: '/hotelProps',
    name: 'hotelProps',
    component: HotelPropsView
  },
  {
    path: '/company',
    name: 'company',
    component: Company
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
  {
    path: '/parent',
    name: 'parent',
    component: Parent
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router