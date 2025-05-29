import { User } from "./User";
import { Address } from "./Address";
import { Product } from "./Product";
import { Order } from "./Order";
import { OrderItem } from "./OrderItem";

export class Seller extends User {
    private storeName: string;
    private address: Address;
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
        console.log(`Address updated to ${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.zipCode}.`);
    }

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Product "${product.name}" added to ${this.storeName}.`);
    }

    updateStock(product: Product, quantity: number): void {
        const prod = this.products.find(p => p.productID === product.productID);
        if (prod) {
            prod.stockQuantity = quantity;
            console.log(`Stock updated for "${prod.name}" to ${quantity}.`);
        } else {
            console.log(`Product with ID ${product.productID} not found.`);
        }
    }

    viewMyOrders(): Order[] {
        // Return all orders related to this seller's products
        console.log(`Orders for ${this.storeName}:`, this.orders);
        return this.orders;
    }

    processShipment(orderItem: OrderItem): void {
        // Find the order containing this order item and mark as shipped
        const order = this.orders.find(o =>
            o.items.some(item => item === orderItem)
        );
        if (order && orderItem.shipment && orderItem.shipment.trackingNumber === "") {
            orderItem.shipment.trackingNumber = "TRACK" + Math.floor(Math.random() * 1000000);
            orderItem.shipment.status = "Shipped";
            console.log(`Order item for product "${orderItem.product.name}" has been shipped.`);
        } else if (order) {
            console.log(`Order item already shipped.`);
        } else {
            console.log(`Order item not found in seller's orders.`);
        }
    }
}