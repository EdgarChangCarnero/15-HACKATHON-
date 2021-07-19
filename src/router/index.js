import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListaContacto from '../views/ListaContactos.vue'
import Mantenimiento from '../views/Mantenimiento.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/listaContactos',
    name: 'ListaContacto',
    component: ListaContacto
  },
  {
    path: '/mantenimiento/:id',
    name: 'Mantenimiento',
    component: Mantenimiento
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
