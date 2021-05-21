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
        <td>
          <button :disabled="shoudlDisableButton(product.id)" @click="decrement(product)">-</button>
            {{ product.quantity }}
          <button @click="increment(product)">+</button></td>
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
      productsWithDisabledButton: []
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
  methods: {
    increment(product) {
      product.quantity++
      if(this.productsWithDisabledButton.includes(product.id)) {
        this.productsWithDisabledButton = this.productsWithDisabledButton.filter(productId => productId !== product.id)
      }
    },
    decrement(product) {
      product.quantity--
      if(product.quantity === 0) {
        this.productsWithDisabledButton.push(product.id)
      }
    },
    shoudlDisableButton(productId) {
      return this.productsWithDisabledButton.includes(productId)
    }
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
