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
 * Returns the cart ID.
 * @returns The unique identifier for the cart.
 */
getCartID(): number {
    return this.cartID;
}

/**
 * Sets the cart ID.
 * @param cartID - The unique identifier to assign to the cart.
 */
setCartID(cartID: number): void {
    this.cartID = cartID;
}

/**
 * Returns the customer associated with the cart.
 * @returns The customer object.
 */
getCustomer(): Customer {
    return this.customer;
}

/**
 * Sets the customer associated with the cart.
 * @param customer - The customer object to assign to the cart.
 */
setCustomer(customer: Customer): void {
    this.customer = customer;
}

/**
 * Returns the list of items in the cart.
 * @returns An array of CartItem objects.
 */
getItems(): CartItem[] {
    return this.items;
}

/**
 * Sets the list of items in the cart.
 * @param items - An array of CartItem objects to assign to the cart.
 */
setItems(items: CartItem[]): void {
    this.items = items;
}

/**
 * Adds a new item to the cart.
 * @param item - The CartItem object to add to the cart.
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
