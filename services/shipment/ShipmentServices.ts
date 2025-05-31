import { Shipment } from "../../models/shipment/Shipment";
import { AddressServices } from "../address/AddressServices";

export class ShipmentServices {
    private addressServices = new AddressServices();

    updateTrackingNumber(shipment: Shipment, trackingNumber: string): void {
        shipment.setTrackingNumber(trackingNumber);
        console.log(`Tracking number updated to ${shipment.getTrackingNumber()}.`);
    }

    updateDeliveryMethod(shipment: Shipment, deliveryMethod): void {
        shipment.setDeliveryMethod(deliveryMethod);
        console.log(`Delivery method updated to ${deliveryMethod.getType()}.`);
    }

    updateDestination(shipment: Shipment, destination): void {
        shipment.setDestination(destination);
        console.log(`Destination updated to ${this.addressServices.getFullAddress(destination)}.`);
    }

    trackShipment(shipment: Shipment): string {
        return `Tracking shipment ${shipment.getTrackingNumber()} to ${this.addressServices.getFullAddress(shipment.getDestination())} via ${shipment.getDeliveryMethod().getType()}.`;
    }
}