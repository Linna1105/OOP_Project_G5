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

    /**
 * Returns the product associated with this order item.
 * @returns {Product} The product object.
 */
    getProduct(): Product {
        return this.product;
    }

    /**
     * Returns the quantity of the product ordered.
     * @returns {number} The quantity ordered.
     */
    getQuantity(): number {
        return this.quantity;
    }

    /**
     * Returns the shipment information related to this order item.
     * @returns {Shipment} The shipment object.
     */
    getShipment(): Shipment {
        return this.shipment;
    }

    /**
     * Returns the delivery option chosen for this order item.
     * @returns {DeliveryOption} The delivery option object.
     */
    getDeliveryOption(): DeliveryOption {
        return this.deliveryOption;
    }

    /**
     * Sets the quantity for the order item.
     * @param {number} quantity - The quantity to set; must be greater than zero.
     * @throws Will throw an error if quantity is zero or negative.
     */
    setQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero');
        }
        this.quantity = quantity;
    }

    /**
     * Sets the delivery option for the order item.
     * @param {DeliveryOption} deliveryOption - The delivery option to apply.
     */
    setDeliveryOption(deliveryOption: DeliveryOption): void {
        this.deliveryOption = deliveryOption;
    }

    /**
     * Calculates the total cost for this order item including product price and delivery fee.
     * @returns {number} The total cost (product price * quantity + delivery fee).
     */
    getTotalCost(): number {
        const baseCost = this.product.getFinalPrice() * this.quantity;
        const deliveryFee = this.deliveryOption ? this.deliveryOption.getFee() : 0;
        return baseCost + deliveryFee;
    }

}
