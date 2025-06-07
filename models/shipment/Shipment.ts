import { DeliveryOption } from "../Delivery/DeliveryOption";
import { Address } from "../address/Address";
import { ShipmentTracking } from "./ShipmentTracking";

export class Shipment {
    private shipmentID: number;
    private trackingNumber: string;
    private deliveryMethod: DeliveryOption;
    private destination: Address;
    private tracking?: ShipmentTracking;

    constructor(
        shipmentID: number,
        trackingNumber: string,
        deliveryMethod: DeliveryOption,
        destination: Address,
        tracking?: ShipmentTracking
    ) {
        this.shipmentID = shipmentID;
        this.trackingNumber = trackingNumber;
        this.deliveryMethod = deliveryMethod;
        this.destination = destination;
        this.tracking = tracking;
    }

 /**
 * Returns the unique shipment ID.
 * @returns {number} The shipment identifier.
 */
getShipmentID(): number {
    return this.shipmentID;
}

/**
 * Returns the tracking number for the shipment.
 * @returns {string} The shipment tracking number.
 */
getTrackingNumber(): string {
    return this.trackingNumber;
}

/**
 * Returns the delivery method used for shipment.
 * @returns {DeliveryOption} The delivery option (e.g., courier, mail).
 */
getDeliveryMethod(): DeliveryOption {
    return this.deliveryMethod;
}

/**
 * Returns the shipment destination address.
 * @returns {Address} The address where shipment is to be delivered.
 */
getDestination(): Address {
    return this.destination;
}

/**
 * Returns tracking details if available.
 * @returns {ShipmentTracking | undefined} Tracking info or undefined if none.
 */
getTracking(): ShipmentTracking | undefined {
    return this.tracking;
}

/**
 * Sets the shipment tracking number.
 * @param {string} trackingNumber - The tracking number to assign.
 */
setTrackingNumber(trackingNumber: string): void {
    this.trackingNumber = trackingNumber;
}

/**
 * Sets the delivery method for the shipment.
 * @param {DeliveryOption} deliveryMethod - The delivery option to assign.
 */
setDeliveryMethod(deliveryMethod: DeliveryOption): void {
    this.deliveryMethod = deliveryMethod;
}

/**
 * Sets the shipment destination address.
 * @param {Address} destination - The delivery address.
 */
setDestination(destination: Address): void {
    this.destination = destination;
    console.log(`Destination updated to ${this.destination.getFullAddress()}.`);
}

/**
 * Returns a string summary for tracking the shipment.
 * @returns {string} Tracking message including tracking number, destination, and delivery method.
 */
trackShipment(): string {
    return `Tracking shipment ${this.trackingNumber} to ${this.destination.getFullAddress()} via ${this.deliveryMethod.getType()}.`;
}

/**
 * Sets the shipment tracking details.
 * @param {ShipmentTracking} tracking - The shipment tracking information.
 */
setTracking(tracking: ShipmentTracking): void {
    this.tracking = tracking;
}

}
