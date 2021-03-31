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
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "about" */ '../views/Components.vue')
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todoList" */ '../views/TodoList.vue')
  },
  {
    path: '/github',
    name: 'GitHub',
    component: () => import(/* webpackChunkName: "todoList" */ '../views/GitHub.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
