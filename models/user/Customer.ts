import { User } from "./User";
import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { Product } from "../product/Product";
import { Review } from "../review/Review";
import { OrderItem } from "../order/OrderItem";

export class Customer extends User {
    private shippingAddress: Address;

    constructor(userID: number, name: string, email: string, password: string, shippingAddress: Address) {
        super(userID, name, email, password, 'Customer');
        this.shippingAddress = shippingAddress;
    }

    getShippingAddress(): Address {
        return this.shippingAddress;
    }

    setShippingAddress(address: Address): void {
        this.shippingAddress = address;
    }

    browseProducts(): void {
        // Implement product browsing logic
        console.log("Browsing products...");
    }

    addToCart(product: Product): void {
        // Implement add to cart logic
        console.log(`Added product "${product.getName()}" to cart.`);
    }

    placeOrder(): Order {
        // Implement order placement logic
        console.log("Order placed.");
        // Return a dummy order for demonstration
        return new Order(0, this, "Pending", []);
    }

    writeReview(product: Product, rating: number, comment: string): Review {
        const review = new Review(Date.now(), rating, comment, new Date(), this, product);
        console.log(`Review written for product "${product.getName()}".`);
        return review;
    }

    cancelOrderItem(item: OrderItem): void {
        // Implement cancel order item logic
        console.log("Order item cancelled.");
    }

    displayInfo(): string {
        return `Customer: ${this.name} (${this.email})`;
    }
}