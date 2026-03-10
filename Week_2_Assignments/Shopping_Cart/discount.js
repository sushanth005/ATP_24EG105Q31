const coupons = {
  WELCOME10: 10,
  FLAT500: 500
};

//Function to apply discount
export function applyDiscount(total, couponCode) {

  if (!couponCode) return total;

  if (couponCode === "WELCOME10") {
    return total - (total * 0.10);
  }

  if (couponCode === "FLAT500") {
    return total - 500;
  }

  return total;
}
