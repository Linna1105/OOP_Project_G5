import { Seller } from "../../models/user/Seller";
import { Product } from "../../models/product/Product";
import { Order } from "../../models/order/Order";
import { OrderItem } from "../../models/order/OrderItem";

export class SellerServices {
    /**
  * Adds a product to the seller's product list.
  * @param seller - The Seller who owns the store and products.
  * @param product - The Product to be added to the seller's catalog.
  */
    addProduct(seller: Seller, product: Product): void {
        seller.getProducts().push(product);
        console.log(`Product "${product.getName()}" added to ${seller.getStoreName()}.`);
    }

    /**
     * Updates the stock quantity of a specific product for the seller.
     * @param seller - The Seller who owns the product.
     * @param product - The Product whose stock quantity will be updated.
     * @param quantity - The new stock quantity to set.
     */
    updateStock(seller: Seller, product: Product, quantity: number): void {
        const prod = seller.getProducts().find(p => p.getProductID() === product.getProductID());
        if (prod) {
            prod.setStockQuantity(quantity);
            console.log(`Stock updated for "${prod.getName()}" to ${quantity}.`);
        } else {
            console.log(`Product with ID ${product.getProductID()} not found.`);
        }
    }

    /**
     * Retrieves all orders associated with the seller.
     * @param seller - The Seller whose orders are to be viewed.
     * @returns An array of Order objects related to the seller.
     */
    viewMyOrders(seller: Seller): Order[] {
        console.log(`Orders for ${seller.getStoreName()}:`, seller.getOrders());
        return seller.getOrders();
    }

    /**
     * Processes shipment for a specific order item belonging to the seller.
     * @param seller - The Seller responsible for shipping the order item.
     * @param orderItem - The specific OrderItem to be shipped.
     */
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
