import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import Home from '../views/Home.vue'

Vue.use(Meta,{refreshOnceOnNavigation: true})
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    //meta: {title: '墨雨設計'},
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {title: '簡介 | 墨雨設計'}
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "course" */ '../views/Works.vue'),
    meta: {title: '作品 | 墨雨設計'}
  },
  {
    path: '/works/:id',
    name: 'WorksIndep',
    props: true,
    component: () => import(/* webpackChunkName: "course" */ '../views/Works_indep.vue'),
    meta: {title: '作品 | 墨雨設計'}
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import(/* webpackChunkName: "course" */ '../views/Tutorial.vue'),
    meta: {title: '教學 | 墨雨設計'}
  },
  {
    path: '/Lab',
    name: 'Lab',
    component: () => import(/* webpackChunkName: "Lab" */ '../views/Lab.vue'),
    meta: {title: '實驗 | 墨雨設計'}
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue'),
    meta: {title: '文章 | 墨雨設計'}
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {title: '聯絡我們 | 墨雨設計'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
