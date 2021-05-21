const products = [
  {
    id: 1,
    title: 'iPone 11',
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
]

export default class ProductService {
  getAllProducts () {
    return products
  }
}

export const productService = new ProductService()