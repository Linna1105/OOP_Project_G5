import { User } from "./User";
import { Product } from "./Product";
import { Shipment } from "./Shipment";
import { DeliveryOption } from "./DeliveryOption";

export class OrderItem extends User {
    private product: Product;
    private quantity: number;
    private shipment: Shipment;
    private deliveryOption: DeliveryOption;

    constructor(
        userID: number,
        name: string,
        email: string,
        password: string,
        product: Product,
        quantity: number,
        shipment: Shipment,
        deliveryOption: DeliveryOption
    ) {
        super(userID, name, email,password);
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

        switch (this.deliveryOption) {
            case DeliveryOption.STANDARD:
                deliveryCost = 5.99;
                break;
            case DeliveryOption.EXPRESS:
                deliveryCost = 15.99;
                break;
            case DeliveryOption.NEXT_DAY:
                deliveryCost = 25.99;
                break;
        }

        return baseCost + deliveryCost;
    }

    // Get order details
    getOrderDetails(): string {
        return `
            Product: ${this.product.isAvailable()}
            Quantity: ${this.quantity}
            Delivery Option: ${this.deliveryOption}
            Shipment Address: ${this.shipment.getAddress()}
            Shipment Status: ${this.shipment.getStatus()}
            Total Cost: $${this.getTotalCost().toFixed(2)}
        `;
    }
}