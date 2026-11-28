// LunchBox order history
const pastOrders = [];

function addPastOrder(order) {
  pastOrders.push(order); // newest first
}

function orderCount() {
  return pastOrders.length;
}
