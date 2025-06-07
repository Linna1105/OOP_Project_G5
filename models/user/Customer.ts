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

    /**
   * Retrieves the customer's shipping address.
   * @returns {Address} The shipping address.
   */
    getShippingAddress(): Address {
        return this.shippingAddress;
    }

    /**
     * Sets the customer's shipping address.
     * @param {Address} address - The address to be set as the shipping address.
     */
    setShippingAddress(address: Address): void {
        this.shippingAddress = address;
    }

    /**
     * Simulates browsing products.
     * This is a placeholder for real browsing logic.
     */
    browseProducts(): void {
        console.log("Browsing products...");
    }

    /**
     * Simulates adding a product to the cart.
     * @param {Product} product - The product to add.
     */
    addToCart(product: Product): void {
        console.log(`Added product "${product.getName()}" to cart.`);
    }

    /**
     * Simulates placing an order.
     * @returns {Order} A new dummy order with this customer and status "Pending".
     */
    placeOrder(): Order {
        console.log("Order placed.");
        return new Order(0, this, "Pending", []);
    }

    /**
     * Allows the customer to write a product review.
     * @param {Product} product - The product being reviewed.
     * @param {number} rating - Rating value for the review.
     * @param {string} comment - Textual comment for the review.
     * @returns {Review} The newly created review.
     */
    writeReview(product: Product, rating: number, comment: string): Review {
        const review = new Review(Date.now(), rating, comment, new Date(), this, product);
        console.log(`Review written for product "${product.getName()}".`);
        return review;
    }

    /**
     * Simulates cancelling an item in the order.
     * @param {OrderItem} item - The item to be canceled.
     */
    cancelOrderItem(item: OrderItem): void {
        console.log("Order item cancelled.");
    }

    /**
     * Displays customer information.
     * @returns {string} A string with the customer's name and email.
     */
    displayInfo(): string {
        return `Customer: ${this.name} (${this.email})`;
    }

}