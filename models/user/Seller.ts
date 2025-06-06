import { User } from "./User";
import { Address } from "../address/Address";
import { Product } from "../product/Product";
import { Order } from "../order/Order";

export class Seller extends User {
    private address: Address;
    private products: Product[] = [];
    private orders: Order[] = [];

    constructor(
        userID: number,
        name: string,
        email: string,
        password: string,
        address: Address
    ) {
        super(userID, name, email, password, 'Seller');
        this.address = address;
    }

    getAddress(): Address {
        return this.address;
    }

    setAddress(address: Address): void {
        this.address = address;
    }

    getProducts(): Product[] {
        return this.products;
    }

    setProducts(products: Product[]): void {
        this.products = products;
    }

    getOrders(): Order[] {
        return this.orders;
    }

    setOrders(orders: Order[]): void {
        this.orders = orders;
    }

    displayInfo(): string {
        return `Seller: ${this.name}, Email: ${this.email}`;
    }
}
