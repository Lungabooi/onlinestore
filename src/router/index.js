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
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },

  {
    path: '/Register',
    name: 'Register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import( '../views/Books.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import( '../views/User1.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/Admin.vue')
  },
  {
    path: '/AdminBooks',
    name: 'AdminBooks',
    component: () => import( '../views/AdminBooks.vue')
  },
  ,
  {
    path: '/AdminUsers',
    name: 'AdminUsers',
    component: () => import( '../views/AdminUsers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
