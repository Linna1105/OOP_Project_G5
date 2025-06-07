import { CartItem } from "./CartItem";
import { Customer } from "../user/Customer";

export class Cart {
    private cartID: number;
    private customer: Customer;
    private items: CartItem[] = [];

    constructor(cartID: number, customer: Customer) {
        this.cartID = cartID;
        this.customer = customer;
    }

   /**
 * Returns the unique ID of the cart.
 * @returns {number} The cart ID.
 */
getCartID(): number {
    return this.cartID;
}

/**
 * Sets the cart ID.
 * @param {number} cartID - The ID to assign to the cart.
 */
setCartID(cartID: number): void {
    this.cartID = cartID;
}

/**
 * Returns the customer associated with this cart.
 * @returns {Customer} The customer object.
 */
getCustomer(): Customer {
    return this.customer;
}

/**
 * Sets the customer for this cart.
 * @param {Customer} customer - The customer to assign to the cart.
 */
setCustomer(customer: Customer): void {
    this.customer = customer;
}

/**
 * Returns the list of items currently in the cart.
 * @returns {CartItem[]} An array of cart items.
 */
getItems(): CartItem[] {
    return this.items;
}

/**
 * Sets the items in the cart.
 * @param {CartItem[]} items - An array of items to set in the cart.
 */
setItems(items: CartItem[]): void {
    this.items = items;
}

/**
 * Adds a single item to the cart.
 * @param {CartItem} item - The item to add.
 */
addItem(item: CartItem): void {
    this.items.push(item);
}

/**
 * Clears all items from the cart.
 */
clearItems(): void {
    this.items = [];
}

}
