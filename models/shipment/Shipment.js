"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipment = void 0;
var Shipment = /** @class */ (function () {
    function Shipment(shipmentID, trackingNumber, deliveryMethod, destination, tracking) {
        this.shipmentID = shipmentID;
        this.trackingNumber = trackingNumber;
        this.deliveryMethod = deliveryMethod;
        this.destination = destination;
        this.tracking = tracking;
    }
    Shipment.prototype.getShipmentID = function () {
        return this.shipmentID;
    };
    Shipment.prototype.getTrackingNumber = function () {
        return this.trackingNumber;
    };
    Shipment.prototype.getDeliveryMethod = function () {
        return this.deliveryMethod;
    };
    Shipment.prototype.getDestination = function () {
        return this.destination;
    };
    Shipment.prototype.getTracking = function () {
        return this.tracking;
    };
    Shipment.prototype.setTrackingNumber = function (trackingNumber) {
        this.trackingNumber = trackingNumber;
    };
    Shipment.prototype.setDeliveryMethod = function (deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    };
    Shipment.prototype.setDestination = function (destination) {
        this.destination = destination;
        console.log("Destination updated to ".concat(this.destination.getFullAddress(), "."));
    };
    Shipment.prototype.trackShipment = function () {
        return "Tracking shipment ".concat(this.trackingNumber, " to ").concat(this.destination.getFullAddress(), " via ").concat(this.deliveryMethod.getType(), ".");
    };
    Shipment.prototype.setTracking = function (tracking) {
        this.tracking = tracking;
    };
    return Shipment;
}());
exports.Shipment = Shipment;
