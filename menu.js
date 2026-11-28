// LunchBox menu: prices in shillings (KES)
const menu = [
  { name: "Chicken and rice", price: 450 },
  { name: "Beef stew", price: 480 },
  { name: "Vegetable curry", price: 350 },
  { name: "Fruit salad", price: 200 },
  { name: "Chips", price: 250 },
  { name: "Samosa", price: 120 },
  { name: "Pancakes", price: 250 },
  { name: "Fish and chips", price: 500 },
  { name: "Tomato soup", price: 280 }
];

const list = document.getElementById("menu");
for (const item of menu) {
  const li = document.createElement("li");
  li.textContent = item.name + " - KES " + item.price;
  list.appendChild(li);
}
// Prices include VAT
