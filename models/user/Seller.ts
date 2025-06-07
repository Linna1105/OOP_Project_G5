import { User } from "./User";
import { Address } from "../address/Address";
import { Product } from "../product/Product";
import { Order } from "../order/Order";
import { Store } from "../store/Store";

export class Seller extends User {
    private address: Address;
    private products: Product[] = [];
    private orders: Order[] = [];
    private store: Store;

    constructor(
        userID: number,
        name: string,
        email: string,
        password: string,
        address: Address,
        store: Store
    ) {
        super(userID, name, email, password, 'Seller');
        this.address = address;
        this.store = store;
    }

 /**
     * Returns the name of the store managed by the seller.
     * @returns {string} The store name.
     */
    getStoreName(): string {
        return this.store.getName();
    }

    /**
  * Retrieves the seller's address.
  * @returns {Address} The current address of the seller.
  */
    getAddress(): Address {
        return this.address;
    }

    /**
     * Sets the seller's address.
     * @param {Address} address - The address to assign to the seller.
     */
    setAddress(address: Address): void {
        this.address = address;
    }

    /**
     * Retrieves the list of products sold by the seller.
     * @returns {Product[]} An array of products associated with the seller.
     */
    getProducts(): Product[] {
        return this.products;
    }

    /**
     * Sets the list of products sold by the seller.
     * @param {Product[]} products - An array of products to assign to the seller.
     */
    setProducts(products: Product[]): void {
        this.products = products;
    }

    /**
     * Retrieves the list of orders associated with the seller.
     * @returns {Order[]} An array of orders handled by the seller.
     */
    getOrders(): Order[] {
        return this.orders;
    }

    /**
     * Sets the list of orders for the seller.
     * @param {Order[]} orders - An array of orders to assign to the seller.
     */
    setOrders(orders: Order[]): void {
        this.orders = orders;
    }

    /**
     * Displays basic seller information.
     * @returns {string} A string containing the seller's name and email.
     */
    displayInfo(): string {
        return `Seller: ${this.name}, Email: ${this.email}`;
    }

}
