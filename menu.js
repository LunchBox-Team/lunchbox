// LunchBox menu: prices in shillings (KES)
const menu = [
  { name: "Chicken and rice", price: 450 },
  { name: "Beef stew", price: 400 },
  { name: "Vegetable curry", price: 350 },
  { name: "Fruit salad", price: 150 }
];

const list = document.getElementById("menu");
for (const item of menu) {
  const li = document.createElement("li");
  li.textContent = item.name + " - KES " + item.price;
  list.appendChild(li);
}
