<template>
  <div>
    <table v-if="product.quantity" class="table">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Quantity</th>
        <th>Customer</th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.quantity }}</td>
        <td>
          <select v-model="selectedCustomerId">
            <option :value="null" disabled selected>Please select customer</option>
            <option :value="customer.id" v-for="customer in customers" :key="customer.id">
              {{ customer.firstName }} {{ customer.lastName }}
            </option>
          </select>
        </td>
        <th><b-button pill variant="outline-danger" @click="confirmProduct(selectedCustomerId)">Confirm</b-button></th>
        <th><b-button pill variant="outline-danger" to="/products">Cancel</b-button></th>
        </tr>
    </table>
    <div v-else>
        <h3>We do not have this product in stock</h3>
        <router-link to="/products">Go Back to Products</router-link>
    </div>
  </div>
</template>
<script>
import { productService } from '@/data/products.js'
import { customerService } from '@/data/customers.js'
export default {
  props: {
    productId: {
      type: Number
    }
  },
  data() {
    return {
      customers: customerService.getAllCustomers(),
      selectedCustomerId: null,
      productsInstock: false
    }
  },
  computed: {
    product () {
      return productService.getProduct(this.productId)
    }
  },
  methods: {
    confirmProduct(customerId) {
      if(!customerId) {
        alert('Please select Customer')
        return
      }
      productService.decrementQuantity(this.product.id)
      customerService.addProductToCustomer(this.product, customerId);
      this.$router.push({ name: 'Customer', params: { id: customerId }})
    }
  }
}
</script>


