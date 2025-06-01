import { Product } from "../product/Product";
import { Shipment } from "../shipment/Shipment";
import { DeliveryOption } from "../Delivery/DeliveryOption";

export class OrderItem {
    private product: Product;
    private quantity: number;
    private shipment: Shipment;
    private deliveryOption: DeliveryOption;

    constructor(
        product: Product,
        quantity: number,
        shipment: Shipment,
        deliveryOption: DeliveryOption
    ) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero');
        }
        this.product = product;
        this.quantity = quantity;
        this.shipment = shipment;
        this.deliveryOption = deliveryOption;
    }

    getProduct(): Product {
        return this.product;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getShipment(): Shipment {
        return this.shipment;
    }

    getDeliveryOption(): DeliveryOption {
        return this.deliveryOption;
    }

    setQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero');
        }
        this.quantity = quantity;
    }

    setDeliveryOption(deliveryOption: DeliveryOption): void {
        this.deliveryOption = deliveryOption;
    }

<<<<<<< HEAD:models/OrderItem.ts
    // Calculate total cost
    // ...existing code...
    // Calculate total cost
    getTotalCost(): number {
        let baseCost = this.product.getFinalPrice() * this.quantity;
        let deliveryCost = this.deliveryOption.getFee();
        return baseCost + deliveryCost;
    }
    // ...existing code...

    // Get order details
    getOrderDetails(): string {
        return `
            Product: ${this.product.isAvailable()}
            Quantity: ${this.quantity}
            Delivery Option: ${this.deliveryOption}
            Shipment Address: ${this.shipment}
            Shipment Status: ${this.shipment}
            Total Cost: $${this.getTotalCost().toFixed(2)}
        `;
    }
}
=======
    getTotalCost(): number {
        const baseCost = this.product.getFinalPrice() * this.quantity;
        const deliveryFee = this.deliveryOption ? this.deliveryOption.getFee() : 0;
        return baseCost + deliveryFee;
    }
}
>>>>>>> e367d5be05fe608a632fff0b2b320a057f1608e6:models/order/OrderItem.ts
