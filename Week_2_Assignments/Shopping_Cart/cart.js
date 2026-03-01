import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {

  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity))
    return "Not enough stock";

  const item = cartItems.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return "Item removed";
}

export function updateQuantity(productId, newQuantity) {

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not found in cart";

  if (!checkStock(productId, newQuantity))
    return "Not enough stock";

  item.quantity = newQuantity;
  return "Quantity updated";
}

export function getCartItems() {

  return cartItems.map(i => {
    const product = getProductById(i.productId);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: i.quantity,
      total: product.price * i.quantity
    };
  });
}

export function getCartTotal() {
  return getCartItems().reduce((sum, i) => sum + i.total, 0);
}

export function clearCart() {
  cartItems = [];
}