export class ShipmentTracking {
    private trackingNumber: string;
    private status: string;
    private lastUpdated: Date;

    constructor(trackingNumber: string, status: string, lastUpdated: Date = new Date()) {
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.lastUpdated = lastUpdated;
    }

    /**
   * Returns the shipment's tracking number.
   * @returns {string} The tracking number assigned to the shipment.
   */
    getTrackingNumber(): string {
        return this.trackingNumber;
    }

    /**
     * Returns the current status of the shipment.
     * @returns {string} The shipment status (e.g., in transit, delivered).
     */
    getStatus(): string {
        return this.status;
    }

    /**
     * Returns the timestamp when the shipment status was last updated.
     * @returns {Date} The date and time of the last status update.
     */
    getLastUpdated(): Date {
        return this.lastUpdated;
    }

    /**
     * Updates the shipment status and sets the last updated timestamp to now.
     * @param {string} newStatus - The new status to assign.
     */
    updateStatus(newStatus: string): void {
        this.status = newStatus;
        this.lastUpdated = new Date();
    }

    /**
     * Returns a formatted string with the tracking number, status, and last updated time.
     * @returns {string} The detailed tracking info.
     */
    getTrackingInfo(): string {
        return `Tracking #${this.trackingNumber} - Status: ${this.status} (Last updated: ${this.lastUpdated.toLocaleString()})`;
    }

}