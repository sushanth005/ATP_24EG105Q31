import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method);
}

export function processPayment(method, couponCode = null) {

  const items = getCartItems();
  if (items.length === 0)
    return { status: "failed", message: "Cart is empty" };

  if (!validatePaymentMethod(method))
    return { status: "failed", message: "Invalid payment method" };

  const subtotal = getCartTotal();
  const finalTotal = applyDiscount(subtotal, couponCode);

  // reduce stock
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: "ORD" + Date.now(),
    items,
    subtotal,
    total: finalTotal,
    paymentMethod: method,
    status: "success"
  };
}