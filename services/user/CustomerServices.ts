import { Customer } from "../../models/user/Customer";
import { Product } from "../../models/product/Product";
import { Address } from "../../models/address/Address";
import { Order } from "../../models/order/Order";
import { Review } from "../../models/review/Review";
import { OrderItem } from "../../models/order/OrderItem";

export class CustomerServices {
    browseProducts(customer: Customer): void {
        customer.browseProducts();
    }

    addToCart(customer: Customer, product: Product): void {
        customer.addToCart(product);
    }

    placeOrder(customer: Customer): Order {
        return customer.placeOrder();
    }

    writeReview(customer: Customer, product: Product, rating: number, comment: string): Review {
        return customer.writeReview(product, rating, comment);
    }

    cancelOrderItem(customer: Customer, item: OrderItem): void {
        customer.cancelOrderItem(item);
    }

    updateShippingAddress(customer: Customer, address: Address): void {
        customer.setShippingAddress(address);
    }

    getCustomerInfo(customer: Customer): string {
        return customer.displayInfo();
    }
}