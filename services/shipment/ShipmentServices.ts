import { Shipment } from "../../models/shipment/Shipment";
import { AddressServices } from "../address/AddressServices";
import { DeliveryOption } from "../../models/Delivery/DeliveryOption";
import { Address } from "../../models/address/Address";
import { ShipmentTracking } from "../../models/shipment/ShipmentTracking";

export class ShipmentServices {
    private addressServices = new AddressServices();

    updateTrackingNumber(shipment: Shipment, trackingNumber: string): void {
        shipment.setTrackingNumber(trackingNumber);
        console.log(`Tracking number updated to ${shipment.getTrackingNumber()}.`);
    }

    updateDeliveryMethod(shipment: Shipment, deliveryMethod: DeliveryOption): void {
        shipment.setDeliveryMethod(deliveryMethod);
        console.log(`Delivery method updated to ${deliveryMethod.getType()}.`);
    }

    updateDestination(shipment: Shipment, destination: Address): void {
        shipment.setDestination(destination);
        console.log(`Destination updated to ${this.addressServices.getFullAddress(destination)}.`);
    }

    trackShipment(shipment: Shipment): string {
        return `Tracking shipment ${shipment.getTrackingNumber()} to ${this.addressServices.getFullAddress(shipment.getDestination())} via ${shipment.getDeliveryMethod().getType()}.`;
    }

    assignTracking(shipment: Shipment, tracking: ShipmentTracking): void {
        shipment.setTracking(tracking);
        console.log(`Shipment tracking assigned. ${tracking.getTrackingInfo()}`);
    }

    updateTrackingStatus(shipment: Shipment, newStatus: string): void {
        const tracking = shipment.getTracking();
        if (tracking) {
            tracking.updateStatus(newStatus);
            console.log(`Tracking status updated to "${tracking.getStatus()}".`);
        } else {
            console.log("No tracking assigned to this shipment.");
        }
    }
}
