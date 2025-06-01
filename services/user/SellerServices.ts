import { Seller } from "../../models/user/Seller";
import { Product } from "../../models/product/Product";
import { Order } from "../../models/order/Order";
import { OrderItem } from "../../models/order/OrderItem";

export class SellerServices {
    addProduct(seller: Seller, product: Product): void {
        seller.getProducts().push(product);
        console.log(`Product "${product.getName()}" added to ${seller.getStoreName()}.`);
    }

    updateStock(seller: Seller, product: Product, quantity: number): void {
        const prod = seller.getProducts().find(p => p.getProductID() === product.getProductID());
        if (prod) {
            prod.setStockQuantity(quantity);
            console.log(`Stock updated for "${prod.getName()}" to ${quantity}.`);
        } else {
            console.log(`Product with ID ${product.getProductID()} not found.`);
        }
    }

    viewMyOrders(seller: Seller): Order[] {
        console.log(`Orders for ${seller.getStoreName()}:`, seller.getOrders());
        return seller.getOrders();
    }

    processShipment(seller: Seller, orderItem: OrderItem): void {
        const order = seller.getOrders().find(o =>
            o.getItems().some(item => item === orderItem)
        );

        if (!order) {
            console.log(`Order item not found in seller's orders.`);
            return;
        }

        const shipment = orderItem.getShipment();
        if (shipment && shipment.getTrackingNumber() === "") {
            shipment.setTrackingNumber("TRACK" + Math.floor(Math.random() * 1000000));
            // If your Shipment class has status, update it here:
            // shipment.setStatus("Shipped");
            console.log(`Order item for product "${orderItem.getProduct().getName()}" has been shipped.`);
        } else {
            console.log(`Order item already shipped.`);
        }
    }
}
