<template>
  <div>
    <h3>Products list</h3>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.quantity }}</td>
      </tr>
    </table>

  </div>
</template>
<script>
import { productService } from '@/data/products.js'
export default {
  data () {
    return {
      products: productService.getAllProducts(),
    }
  },
}
</script>
