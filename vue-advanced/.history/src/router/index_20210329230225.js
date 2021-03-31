import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/404.vue')
  // },
  {
    path: '/Layout',
    name: 'Layout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/shoppingcart',
        name: 'ShoppingCart',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/ShoppingCart.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
