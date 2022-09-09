import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/register.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import( '../views/books.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( '../views/user.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/admin.vue')
  },
  {
    path: '/AdminBooks',
    name: 'AdminBooks',
    component: () => import( '../views/AdminBooks.vue')
  },
  {
    path: '/adminUsers',
    name: 'adminUsers',
    component: () => import( '../views/adminUsers.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/contact.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import( '../views/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
