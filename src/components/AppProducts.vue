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
        <th></th>
      </tr>
      <tr v-for="product in filteredProducts" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>
          <button :disabled="!product.quantity" @click="decrement(product)">-</button>
            {{ product.quantity }}
          <button @click="increment(product)">+</button>
        </td>
         <td><router-link :to="{ name: 'Product', params: { id: product.id }}">Sell</router-link></td>
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
      if(!this.search) {
        return this.products
      }
      return this.products.filter(({ title }) =>
          title.toUpperCase().startsWith(this.search.toUpperCase())
      );
    },
  },
  methods: {
    increment(product) {
      product.quantity++
    },
    decrement(product) {
      product.quantity--
    },
  }
}
</script>
<style scoped>
label {
  margin-right: 10px;
}

td button {
  border: 0;
  font-size: 20px;
}

td button:hover {
  color: blue;
}
</style>
