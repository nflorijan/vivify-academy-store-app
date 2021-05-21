const products = [
  {
    id: 1,
    title: 'iPhone 11',
    quantity: 11
  },
  {
    id: 2,
    title: 'Samsung Galaxy',
    quantity: 20
  },
  {
    id: 4,
    title: 'Samsung TV',
    quantity: 40
  },
  {
    id: 5,
    title: 'Lg TV',
    quantity: 25
  },
  {
    id: 6,
    title: 'Logitech Keyboard',
    quantity: 65
  },
  {
    id: 7,
    title: 'iPhone 13 Pro',
    quantity: 5
  },
  {
    id: 8,
    title: 'Samsung Galaxy 10',
    quantity: 0
  },
]

export default class ProductService {
  getAllProducts () {
    return products
  }

  getProduct(id) {
    return products.find(data => data.id === id)
  }

  decrementQuantity(productId) {
    const product = this.getProduct(productId)
    product.quantity -= 1
  }

}

export const productService = new ProductService()