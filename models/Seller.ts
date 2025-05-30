import { User } from "./User";
import { Address } from "./Address";
import { Product } from "./Product";
import { Order } from "./Order";
import { OrderItem } from "./OrderItem";

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

    getAddress(): Address {
        return this.address;
    }

    setStoreName(storeName: string): void {
        this.storeName = storeName;
        console.log(`Store name updated to ${this.storeName}.`);
    }

    setAddress(address: Address): void {
        this.address = address;
        console.log(`Address updated to ${this.address.getStreet}, ${this.address.getCity}, ${this.address.getState}, ${this.address.getZipCode}.`);
    }

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Product "${product.getName}" added to ${this.storeName}.`);
    }

    updateStock(product: Product, quantity: number): void {
        const prod = this.products.find(p => p.getProductID() === product.getProductID());
        if (prod) {
            prod.setStockQuantity(quantity);
            console.log(`Stock updated for "${prod.getName()}" to ${quantity}.`);
        } else {
            console.log(`Product with ID ${product.getProductID()} not found.`);
        }
    }

    viewMyOrders(): Order[] {
        // Return all orders related to this seller's products
        console.log(`Orders for ${this.storeName}:`, this.orders);
        return this.orders;
    }

    processShipment(orderItem: OrderItem): void {
        const order = this.orders.find(o =>
            o.items.some(item => item === orderItem)
        );
        if (order && orderItem.getShipment() && orderItem.getShipment().getTrackingNumber() === "") {
            orderItem.getShipment().setTrackingNumber("TRACK" + Math.floor(Math.random() * 1000000));
            // If you have a setStatus method, use it here
            // orderItem.getShipment().setStatus("Shipped");
            console.log(`Order item for product "${orderItem.getProduct().getName()}" has been shipped.`);
        } else if (order) {
            console.log(`Order item already shipped.`);
        } else {
            console.log(`Order item not found in seller's orders.`);
        }
    }
}