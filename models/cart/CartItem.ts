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
     * @returns {Product} The product object.
     */
    getProduct(): Product {
        return this.product;
    }

    /**
     * Returns the quantity of the product in the cart.
     * @returns {number} The quantity.
     */
    getQuantity(): number {
        return this.quantity;
    }

    /**
     * Sets the quantity for the product in the cart.
     * @param {number} quantity - The new quantity to set.
     */
    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

}