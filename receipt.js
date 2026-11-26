// Receipt for one order
function receiptLines() {
  return cart.map(item => item.name + " - KES " + item.price);
}

function receiptTotal() {
  return "Total: KES " + cartTotal();
}
