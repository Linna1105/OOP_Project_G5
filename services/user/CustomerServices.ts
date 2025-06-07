import { Customer } from "../../models/user/Customer";
import { Product } from "../../models/product/Product";
import { Address } from "../../models/address/Address";
import { Order } from "../../models/order/Order";
import { Review } from "../../models/review/Review";
import { OrderItem } from "../../models/order/OrderItem";

export class CustomerServices {
  /**
 * Allows the customer to browse available products.
 * @param customer - The Customer who wants to browse products.
 */
browseProducts(customer: Customer): void {
    customer.browseProducts();
}

/**
 * Adds a specified product to the customer's shopping cart.
 * @param customer - The Customer who wants to add the product to their cart.
 * @param product - The Product to be added to the cart.
 */
addToCart(customer: Customer, product: Product): void {
    customer.addToCart(product);
}

/**
 * Places an order for the customer.
 * @param customer - The Customer who is placing the order.
 * @returns The created Order instance.
 */
placeOrder(customer: Customer): Order {
    return customer.placeOrder();
}

/**
 * Allows the customer to write a review for a product.
 * @param customer - The Customer writing the review.
 * @param product - The Product being reviewed.
 * @param rating - The numeric rating given by the customer.
 * @param comment - The written comment provided by the customer.
 * @returns The created Review instance.
 */
writeReview(customer: Customer, product: Product, rating: number, comment: string): Review {
    return customer.writeReview(product, rating, comment);
}

/**
 * Cancels a specific order item for the customer.
 * @param customer - The Customer who wants to cancel the order item.
 * @param item - The OrderItem to be cancelled.
 */
cancelOrderItem(customer: Customer, item: OrderItem): void {
    customer.cancelOrderItem(item);
}

/**
 * Updates the shipping address of the customer.
 * @param customer - The Customer whose shipping address is being updated.
 * @param address - The new Address to set for shipping.
 */
updateShippingAddress(customer: Customer, address: Address): void {
    customer.setShippingAddress(address);
}

/**
 * Retrieves a string summary of the customer's information.
 * @param customer - The Customer whose info is being retrieved.
 * @returns A formatted string with customer details.
 */
getCustomerInfo(customer: Customer): string {
    return customer.displayInfo();
}

}