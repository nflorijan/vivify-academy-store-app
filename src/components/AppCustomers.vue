<template>
  <div>
    <h3>Customers list</h3>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th></th>
      </tr>
      <tr v-for="(customer, index) in customers" :key="index">
        <td>{{ customer.id }}</td>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td><b-button pill variant="outline-danger" @click="deleteCustomer(customer)">Delete</b-button></td>
      </tr>
    </table>
  </div>
</template>
<script>
import { customerService } from '@/data/customers.js'
export default {
  data () {
    return {
      customers: customerService.getAllCustomers()
    }
  },
  methods: {
    deleteCustomer (customer) {
      customerService.deleteCustomer(customer)
    }
  }
}
</script>