import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "course" */ '../views/Works.vue')
  },
  {
    path: '/works/:id',
    name: 'WorksIndep',
    props: true,
    component: () => import(/* webpackChunkName: "course" */ '../views/Works_indep.vue')
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import(/* webpackChunkName: "course" */ '../views/Tutorial.vue')
  },
  {
    path: '/Lab',
    name: 'Lab',
    component: () => import(/* webpackChunkName: "Lab" */ '../views/Lab.vue')
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
