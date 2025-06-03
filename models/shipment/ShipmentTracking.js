"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentTracking = void 0;
var ShipmentTracking = /** @class */ (function () {
    function ShipmentTracking(trackingNumber, status, lastUpdated) {
        if (lastUpdated === void 0) { lastUpdated = new Date(); }
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.lastUpdated = lastUpdated;
    }
    ShipmentTracking.prototype.getTrackingNumber = function () {
        return this.trackingNumber;
    };
    ShipmentTracking.prototype.getStatus = function () {
        return this.status;
    };
    ShipmentTracking.prototype.getLastUpdated = function () {
        return this.lastUpdated;
    };
    ShipmentTracking.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        this.lastUpdated = new Date();
    };
    ShipmentTracking.prototype.getTrackingInfo = function () {
        return "Tracking #".concat(this.trackingNumber, " - Status: ").concat(this.status, " (Last updated: ").concat(this.lastUpdated.toLocaleString(), ")");
    };
    return ShipmentTracking;
}());
exports.ShipmentTracking = ShipmentTracking;
