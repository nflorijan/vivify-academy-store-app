<template>
  <div>
    <h3>Customers list</h3>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Latest Purchases</th>
        <th></th>
      </tr>
      <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td><router-link :to="{ name: 'Customer', params: { id: customer.id }}">Latest Purchases</router-link></td>
        <td><b-button pill variant="outline-danger" @click="deleteCustomer(customer)">Delete</b-button></td>
      </tr>
    </table>
    <div>
      <h3>Add new customer</h3>
        <form class="customer-form" @submit.prevent="createCustomer">
        <label>
          First Name:
        </label>
        <input type="text" v-model="newCustomer.firstName">
        <label>
          Last Name:
        </label>
        <input type="text" v-model="newCustomer.lastName">
        <label>
          User Email:
        </label>
        <input type="email" v-model="newCustomer.email">
        
        <button>Create Customer</button>
      </form>
    </div>
  </div>
</template>
<script>
import { customerService } from '@/data/customers.js'
export default {
  data () {
    return {
      customers: customerService.getAllCustomers(),
      newCustomer: {
        firstName: '',
        lastName: '',
        email: '',
        customerProducts: []
      }
    }
  },
  methods: {
    deleteCustomer (customer) {
      customerService.deleteCustomer(customer)
    },
    createCustomer () {
      this.newCustomer.id = customerService.generateId()
      customerService.addCustomer(this.newCustomer)
    }
  }
}
</script>
<style scoped>
.customer-form {
  display: flex;
  flex-direction: column;
}
</style>