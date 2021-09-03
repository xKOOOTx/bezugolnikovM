import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery')
  },
  {
    path: '/official',
    name: 'Official',
    component: () => import('../views/Official')
  },
  {
    path: '/portrait',
    name: 'Portrait',
    component: () => import('../views/Portrait')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Reports')
  },
  {
    path: '/studio',
    name: 'Studio',
    component: () => import('../views/Studio')
  },
  {
    path: '/wedding',
    name: 'Wedding',
    component: () => import('../views/Wedding')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts')
  }
/* {
    path: '/about',
    name: 'About',
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
