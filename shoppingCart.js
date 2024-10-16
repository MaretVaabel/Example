export class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.name === product.name
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }
  updateItemQuantity(productName, newQuantity) {
    const existingItem = this.items.find(
      (item) => item.product.name === productName
    );
    if (existingItem) {
      if (newQuantity <= 0) {
        this.removeItem(productName); // Kui kogus on 0 või väiksem, eemaldame toote ostukorvist
      } else {
        existingItem.quantity = newQuantity;
      }
    }
  }

  removeItem(productName) {
    this.items = this.items.filter((item) => item.product.name !== productName);
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  listItems() {
    return this.items
      .map((item) => `${item.product.name}: ${item.quantity} tk`)
      .join(", ");
  }
}
