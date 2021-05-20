<template>
  <div>
    <h3>Customer: {{ customer.firstName }} {{ customer.lastName }}</h3>
    <p>Email: {{ customer.email }}</p>
    <h4>Customer Products</h4>
    <b-list-group>
      <b-list-group-item v-for="userProduct in customer.customerProducts" :key="userProduct.id">
        <h5>{{ userProduct.title }}</h5>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import { customerService } from '@/data/customers.js'
export default {
  props: {
    customerId: {
      type: Number
    }
  },
  mounted () {
    console.log(customerService.getCustomer(this.customerId))
  },
  computed: {
    customer () {
      return customerService.getCustomer(this.customerId)
    }
  }
}
</script>

<style scoped>

</style>