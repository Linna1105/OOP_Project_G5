import { ShipmentTracking } from "../../models/shipment/ShipmentTracking";

export class ShipmentTrackingServices {
    /**
 * Updates the status of a ShipmentTracking instance and logs the update.
 * 
 * @param tracking - The ShipmentTracking object whose status will be updated.
 * @param newStatus - The new status string to set.
 */
updateStatus(tracking: ShipmentTracking, newStatus: string): void {
    tracking.updateStatus(newStatus);
    console.log(`Status updated to "${newStatus}" for tracking #${tracking.getTrackingNumber()}.`);
}

/**
 * Retrieves the tracking information string from a ShipmentTracking instance.
 * 
 * @param tracking - The ShipmentTracking object to retrieve info from.
 * @returns A formatted string with tracking details.
 */
getTrackingInfo(tracking: ShipmentTracking): string {
    return tracking.getTrackingInfo();
}

}