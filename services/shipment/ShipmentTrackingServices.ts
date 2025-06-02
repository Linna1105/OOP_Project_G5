import { ShipmentTracking } from "../../models/shipment/ShipmentTracking";

export class ShipmentTrackingServices {
    updateStatus(tracking: ShipmentTracking, newStatus: string): void {
        tracking.updateStatus(newStatus);
        console.log(`Status updated to "${newStatus}" for tracking #${tracking.getTrackingNumber()}.`);
    }

    getTrackingInfo(tracking: ShipmentTracking): string {
        return tracking.getTrackingInfo();
    }
}