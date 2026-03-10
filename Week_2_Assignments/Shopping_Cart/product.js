// List of products in the store
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// Get a product using its ID
export function getProductById(id) {
  // find() returns the product object
  return products.find(p => p.id === id);
}

// Return all available products
export function getAllProducts() {
  return products;
}

// Get products based on category (electronics, accessories)
export function getProductsByCategory(category) {
  const result = products.filter(p => p.category === category);

  // If no products found
  if (result.length === 0) {
    return "No product found";
  }

  return result;
}

// Search product by name
export function searchProducts(name) {
  // Returns all products matching the name
  return products.filter(p => p.name === name);
}

// Check if enough stock is available
export function checkStock(id, qty) {
  const product = getProductById(id);

  // return true if product exists and stock is enough
  return product && product.stock >= qty;
}

// Reduce stock after purchase
export function reduceStock(id, qty) {
  const product = getProductById(id);

  // If product exists, decrease its stock
  if (product) {
    product.stock -= qty;
  }
}
