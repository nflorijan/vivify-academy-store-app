const customers = [
  {
    id: 1,
    firstName: 'Florijan',
    lastName: 'Nadj',
    email: 'florijan@gmail.com'
  },
  {
    id: 2,
    firstName: 'Milos',
    lastName: 'Ivankovic',
    email: 'milos@gmail.com'
  }
]

export default class CustomerService {
  getAllCustomers () {
    return customers
  }

  deleteCustomer (customer) {
    customers.splice((customer), 1)
  }

  addCustomer (customer) {
    customers.push(customer)
  }

  generateId () {
    return Math.random().toString(36).substr(2, 9)
  }
}
export const customerService = new CustomerService()