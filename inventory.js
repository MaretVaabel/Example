export class Inventory {
  constructor() {
    this.stock = {};
  }

  // Lisa toode laoseisu
  addProduct(product, quantity) {
    if (this.stock[product.name]) {
      this.stock[product.name].quantity += quantity;
    } else {
      this.stock[product.name] = { product, quantity };
    }
  }

  // Vähenda toote kogust laos, kui toode lisatakse ostukorvi
  reduceStock(productName, quantity) {
    if (
      this.stock[productName] &&
      this.stock[productName].quantity >= quantity
    ) {
      this.stock[productName].quantity -= quantity;
      return true;
    } else {
      return false; // Kui laoseis pole piisav
    }
  }

  // Kontrolli, kas toode on laos saadaval
  checkStock(productName) {
    return this.stock[productName] ? this.stock[productName].quantity : 0;
  }
}
