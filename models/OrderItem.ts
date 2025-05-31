import { Product } from "./Product";
import { Shipment } from "./Shipment";
import { DeliveryOption } from "./DeliveryOption";

export class OrderItem  {
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
        this.product = product;
        this.quantity = quantity;
        this.shipment = shipment;
        this.deliveryOption = deliveryOption;

        // Input validation
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero');
        }
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

    // Setter methods
    setQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero');
        }
        this.quantity = quantity;
    }

    setDeliveryOption(deliveryOption: DeliveryOption): void {
        this.deliveryOption = deliveryOption;
    }

    // Calculate total cost
    getTotalCost(): number {
        let baseCost = this.product.getFinalPrice() * this.quantity;
        let deliveryCost = 0;

        if (this.deliveryOption === DeliveryOption.Standard) {
            deliveryCost = 5;
        } else if (this.deliveryOption === DeliveryOption.Express) {
            deliveryCost = 10;
        }

        return baseCost + deliveryCost;
    }

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