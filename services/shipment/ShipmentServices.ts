import { Shipment } from "../../models/shipment/Shipment";
import { AddressServices } from "../address/AddressServices";
import { DeliveryOption } from "../../models/Delivery/DeliveryOption";
import { Address } from "../../models/address/Address";
import { ShipmentTracking } from "../../models/shipment/ShipmentTracking";

export class ShipmentServices {
    private addressServices = new AddressServices();

/**
 * Updates the tracking number of a shipment and logs the change.
 * 
 * @param shipment - The Shipment object to update.
 * @param trackingNumber - The new tracking number to set.
 */
updateTrackingNumber(shipment: Shipment, trackingNumber: string): void {
    shipment.setTrackingNumber(trackingNumber);
    console.log(`Tracking number updated to ${shipment.getTrackingNumber()}.`);
}

/**
 * Updates the delivery method of a shipment and logs the change.
 * 
 * @param shipment - The Shipment object to update.
 * @param deliveryMethod - The new DeliveryOption to set.
 */
updateDeliveryMethod(shipment: Shipment, deliveryMethod: DeliveryOption): void {
    shipment.setDeliveryMethod(deliveryMethod);
    console.log(`Delivery method updated to ${deliveryMethod.getType()}.`);
}

/**
 * Updates the destination address of a shipment and logs the full address.
 * 
 * @param shipment - The Shipment object to update.
 * @param destination - The new Address object to set.
 */
updateDestination(shipment: Shipment, destination: Address): void {
    shipment.setDestination(destination);
    console.log(`Destination updated to ${this.addressServices.getFullAddress(destination)}.`);
}

/**
 * Returns a formatted string tracking information about the shipment.
 * 
 * @param shipment - The Shipment object to track.
 * @returns A string summarizing tracking number, destination, and delivery method.
 */
trackShipment(shipment: Shipment): string {
    return `Tracking shipment ${shipment.getTrackingNumber()} to ${this.addressServices.getFullAddress(shipment.getDestination())} via ${shipment.getDeliveryMethod().getType()}.`;
}

/**
 * Assigns a ShipmentTracking object to the shipment and logs tracking info.
 * 
 * @param shipment - The Shipment object to update.
 * @param tracking - The ShipmentTracking object to assign.
 */
assignTracking(shipment: Shipment, tracking: ShipmentTracking): void {
    shipment.setTracking(tracking);
    console.log(`Shipment tracking assigned. ${tracking.getTrackingInfo()}`);
}

/**
 * Updates the status of the shipment's tracking info, if tracking is assigned,
 * and logs the updated status. Logs a warning if no tracking is assigned.
 * 
 * @param shipment - The Shipment object to update.
 * @param newStatus - The new status string to set.
 */
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
