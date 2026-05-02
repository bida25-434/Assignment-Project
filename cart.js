*{
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-items");

cart.forEach(item => {
  let p = document.createElement("p");
  p.textContent = item.name + " - P" + item.price;
  container.appendChild(p);
});
