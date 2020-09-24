import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {auth: true},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = store.state.token
  const reqAuth = to.matched.some(record => record.meta.auth)
  if (reqAuth && !token) {
    next('/login')
  } else {
    localStorage.clear()
    next()
  }
})

export default router
