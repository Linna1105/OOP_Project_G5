import { Seller } from "../models/Seller";
import { Product } from "../models/Product";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";

export class SellerServices {
    addProduct(seller: Seller, product: Product): void {
        seller.products.push(product);
        console.log(`Product "${product.getName()}" added to ${seller.getStoreName()}.`);
    }

    updateStock(seller: Seller, product: Product, quantity: number): void {
        const prod = seller.products.find(p => p.getProductID() === product.getProductID());
        if (prod) {
            prod.setStockQuantity(quantity);
            console.log(`Stock updated for "${prod.getName()}" to ${quantity}.`);
        } else {
            console.log(`Product with ID ${product.getProductID()} not found.`);
        }
    }

    viewMyOrders(seller: Seller): Order[] {
        console.log(`Orders for ${seller.getStoreName()}:`, seller.orders);
        return seller.orders;
    }

    processShipment(seller: Seller, orderItem: OrderItem): void {
        const order = seller.orders.find(o =>
            o.items && o.items.some(item => item === orderItem)
        );
        if (order && orderItem.getShipment() && orderItem.getShipment().getTrackingNumber() === "") {
            orderItem.getShipment().setTrackingNumber("TRACK" + Math.floor(Math.random() * 1000000));
            // orderItem.getShipment().setStatus("Shipped"); // If you have this method
            console.log(`Order item for product "${orderItem.getProduct().getName()}" has been shipped.`);
        } else if (order) {
            console.log(`Order item already shipped.`);
        } else {
            console.log(`Order item not found in seller's orders.`);
        }
    }
}