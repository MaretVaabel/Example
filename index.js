import { Product } from "./product.js";
import { ShoppingCart } from "./shoppingCart.js";
import { Inventory } from "./inventory.js";

// Ostukorvi ja laoseisu objektid
const cart = new ShoppingCart();
const inventory = new Inventory();

// // HTML elementide valikud
const cartItemsElement = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");

// Lisa tooted laoseisu
const product1 = new Product("Arvuti", 1000, 5);
const product2 = new Product("Telefon", 600, 10);
const product3 = new Product("Kõrvaklapid", 100, 15);

inventory.addProduct(product1, 5);
inventory.addProduct(product2, 10);
inventory.addProduct(product3, 15);

// Funktsioon toote lisamiseks ostukorvi koos laoseisu kontrolliga
function addToCart(name, price, quantity) {
  const availableStock = inventory.checkStock(name);
  console.log(availableStock, quantity);
  if (availableStock >= quantity) {
    const product = new Product(name, price, quantity);
    if (inventory.reduceStock(name, quantity)) {
      cart.addItem(product, quantity);
      updateCartUI();
    }
  } else {
    alert(`Laoseis pole piisav. Saadaval on ainult ${availableStock} tk.`);
  }
}

// Funktsioon ostukorvi tühjendamiseks
function emptyCart() {
  cart.items = [];
  updateCartUI();
}

// Funktsioon ostukorvi kasutajaliidese uuendamiseks
function updateCartUI() {
  // Tühjenda praegune ostukorvi sisu
  cartItemsElement.innerHTML = "";

  // Näita tooteid koos koguse muutmise ja eemaldamise valikutega
  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
        ${item.product.name} - 
        <input type="number" min="1" value="${item.quantity}" onchange="{updateQuantity('${item.product.name}', this.value)}" /> tk 
        <button onclick="removeFromCart('${item.product.name}')">Eemalda</button>
    `;
    cartItemsElement.appendChild(li);
  });

  // Uuenda kogusummat
  totalPriceElement.textContent = cart.getTotal();
}

// Funktsioon toote koguse uuendamiseks ostukorvis
function updateQuantity(productName, newQuantity) {
  const availableStock = inventory.checkStock(productName);
  if (availableStock >= newQuantity) {
    cart.updateItemQuantity(productName, parseInt(newQuantity, 10));
    updateCartUI();
  } else {
    alert(`Laoseis pole piisav. Saadaval on ainult ${availableStock} tk.`);
  }
}

// Funktsioon toote eemaldamiseks ostukorvist
function removeFromCart(productName) {
  cart.removeItem(productName);
  updateCartUI();
}

//Secondly, a module has it's own scope (this is the whole point of modules)
//thus you need to add the function to the global scope.
//So, to do it you have to run a script which imports
//the function and adds it to the window object:

window.addToCart = addToCart;
window.emptyCart = emptyCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
