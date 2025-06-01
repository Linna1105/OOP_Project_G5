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

    getCartID(): number {
        return this.cartID;
    }

    setCartID(cartID: number): void {
        this.cartID = cartID;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    setCustomer(customer: Customer): void {
        this.customer = customer;
    }

    getItems(): CartItem[] {
        return this.items;
    }

    setItems(items: CartItem[]): void {
        this.items = items;
    }

    addItem(item: CartItem): void {
        this.items.push(item);
    }

    clearItems(): void {
        this.items = [];
    }
}
