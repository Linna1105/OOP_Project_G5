import { Product } from "../product/Product";

export class CartItem {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

   /**
 * Returns the product associated with this cart item.
 * @returns The product object.
 */
getProduct(): Product {
    return this.product;
}

/**
 * Returns the quantity of the product in the cart item.
 * @returns The quantity as a number.
 */
getQuantity(): number {
    return this.quantity;
}

/**
 * Sets the quantity of the product in the cart item.
 * @param quantity - The number of units to set for the product.
 */
setQuantity(quantity: number): void {
    this.quantity = quantity;
}

}