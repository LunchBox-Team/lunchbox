// LunchBox cart: what the customer is ordering
const cart = [];

// The total price of everything in the cart
function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}// Add one dish to the cart
function addToCart(name, price) {
  cart.push({ name, price });
}