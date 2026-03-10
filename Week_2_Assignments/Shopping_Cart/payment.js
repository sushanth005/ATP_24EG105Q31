import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Function to check if the payment method is valid
export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod']; // allowed payment options
  return validMethods.includes(method);
}

// Function to process the payment and create an order
export function processPayment(method, couponCode = null) {

  // Get all items currently in the cart
  const items = getCartItems();

  // If cart is empty, stop the payment
  if (items.length === 0) {
    return { status: "failed", message: "Cart is empty" };
  }

  // Check if the payment method entered is valid
  if (!validatePaymentMethod(method)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  // Calculate the cart total price
  const subtotal = getCartTotal();

  // Apply discount if a coupon code is given
  const finalTotal = applyDiscount(subtotal, couponCode);

  // Reduce stock for each product purchased
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // Clear the cart after successful order
  clearCart();

  // Return the order details
  return {
    orderId: "ORD" + Date.now(), // generate a simple unique order ID
    items,
    subtotal,
    total: finalTotal,
    paymentMethod: method,
    status: "success"
  };
}
