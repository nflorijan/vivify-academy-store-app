<template>
  <div>
    <h3>Products list</h3>
    <label>Search Products:</label>
    <input type="text" v-model="search" />
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="product in filteredProducts" :key="product.id">
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
      search: "",
      products: productService.getAllProducts(),
    }
  },
  computed: {
    filteredProducts() {
      return this.search === ""
        ? this.products
        : this.products.filter(({ title }) =>
            title.toUpperCase().startsWith(this.search.toUpperCase())
          );
    },
  },
}
</script>
<style scoped>
label {
  margin-right: 10px;
}
</style>
