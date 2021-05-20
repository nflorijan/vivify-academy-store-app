const customers = [
  {
    id: 1,
    firstName: 'Florijan',
    lastName: 'Nadj',
    email: 'florijan@gmail.com',
    customerProducts: [
      { id: 1, title: 'Product 1', quantity: 10 },
      { id: 2, title: 'Product 2', quantity: 19 },
      { id: 3, title: 'Product 3', quantity: 30}
    ]
  },
  {
    id: 2,
    firstName: 'Milos',
    lastName: 'Ivankovic',
    email: 'milos@gmail.com',
    customerProducts: [
      { id: 5, title: 'Product 10', quantity: 100 },
      { id: 8, title: 'Product 4', quantity: 333 },
      { id: 10, title: 'Product 9', quantity: 444}
    ]
  }
]

export default class CustomerService {
  getAllCustomers () {
    return customers
  }

  getCustomer(id) {
    return customers.find(data => data.id === id)
  }

  deleteCustomer (customer) {
    customers.splice((customer), 1)
  }

  addCustomer (customer) {
    customers.push(customer)
  }

  generateId () {
    return customers[customers.length - 1].id + 1
  }
}
export const customerService = new CustomerService()