
import { Address } from "./Address";
import { User } from "./User";
import { Order } from "./Order";
import { OrderItem } from "./OrderItem";
import { Refund } from "./Refund";

export class Customer extends User {

    private shippingAddress: Address[];

    constructor(userID: number, name: string, email: string, password: string, shippingAddress?: Address) {
        super(userID, name, email, password);
        this.shippingAddress = shippingAddress || { street: "", city: "", zipCode: "", country: "" };
    }
    displayInfo(): string {
        return `Customer ${this.userID}: ${this.name} (${this.email})`;
    }


    browseProducts(): void {

        console.log(`${this.name} is browsing products.`);

    }

    addToCart(product: string): void {

        console.log(`${this.name} added ${product} to the cart.`);

    }

    placeOrder(): Order {

        console.log(`${this.name} placed an order.`);
        return new Order();

    }

    writeReview(product: string, rating: number, comment: string): void {

        console.log(`${this.name} wrote a review for ${product}: ${rating} stars - ${comment}`);

    }
    cancelOrderItem(item: OrderItem): Refund {

        console.log(`${this.name} canceled an order item: ${item.getProduct}`);
        return new Refund();

    }
}