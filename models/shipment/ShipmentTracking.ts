export class ShipmentTracking {
    private trackingNumber: string;
    private status: string;
    private lastUpdated: Date;

    constructor(trackingNumber: string, status: string, lastUpdated: Date = new Date()) {
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.lastUpdated = lastUpdated;
    }

    getTrackingNumber(): string {
        return this.trackingNumber;
    }

    getStatus(): string {
        return this.status;
    }

    getLastUpdated(): Date {
        return this.lastUpdated;
    }

    updateStatus(newStatus: string): void {
        this.status = newStatus;
        this.lastUpdated = new Date();
    }

    getTrackingInfo(): string {
        return `Tracking #${this.trackingNumber} - Status: ${this.status} (Last updated: ${this.lastUpdated.toLocaleString()})`;
    }
}