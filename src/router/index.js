import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Customers from '../views/Customers.vue'
import Customer from '../views/Customer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/customers/:id',
    name: 'Customer',
    component: Customer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
