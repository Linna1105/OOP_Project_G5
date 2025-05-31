import { DeliveryOption } from "./DeliveryOption";
import { Address } from "./address/Address";

export class Shipment {
    private shipmentID: number;
    private trackingNumber: string;
    private deliveryMethod: DeliveryOption;
    private destination: Address;

    constructor(
        shipmentID: number,
        trackingNumber: string,
        deliveryMethod: DeliveryOption,
        destination: Address
    ) {
        this.shipmentID = shipmentID;
        this.trackingNumber = trackingNumber;
        this.deliveryMethod = deliveryMethod;
        this.destination = destination;
    }

    getShipmentID(): number {
        return this.shipmentID;
    }

    getTrackingNumber(): string {
        return this.trackingNumber;
    }

    getDeliveryMethod(): DeliveryOption {
        return this.deliveryMethod;
    }

    getDestination(): Address {
        return this.destination;
    }

    setTrackingNumber(trackingNumber: string): void {
        this.trackingNumber = trackingNumber;
        console.log(`Tracking number updated to ${this.trackingNumber}.`);
    }

    setDeliveryMethod(deliveryMethod: DeliveryOption): void {
        this.deliveryMethod = deliveryMethod;
        console.log(`Delivery method updated to ${this.deliveryMethod.getType()}.`);
    }

    setDestination(destination: Address): void {
        this.destination = destination;
        console.log(`Destination updated to ${this.destination.fullAddress()}.`);
    }

    trackShipment(): string {
        return `Tracking shipment ${this.trackingNumber} to ${this.destination.fullAddress()} via ${this.deliveryMethod.getType()}.`;
    }
}