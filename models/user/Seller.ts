import { User } from "./User";
import { Address } from "../address/Address";
import { Product } from "../product/Product";
import { Order } from "../Order";

export class Seller extends User {
    private storeName: string;
    address: Address;
    products: Product[] = [];
    orders: Order[] = [];

    constructor(
        userID: number,
        name: string,
        email: string,
        password: string,
        storeName: string,
        address: Address
    ) {
        super(userID, name, email, password);
        this.storeName = storeName;
        this.address = address;
    }

    getStoreName(): string {
        return this.storeName;
    }

    setStoreName(storeName: string): void {
        this.storeName = storeName;
    }

    displayInfo(): string {
        return `Seller: ${this.name}, Store: ${this.storeName}, Email: ${this.email}`;
    }
}