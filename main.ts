//User
import { User } from './models/user/User';
import { UserServices } from './services/user/UserServices';
import { Address } from "./models/address/Address";
import { DeliveryOption } from "./models/Delivery/DeliveryOption";
import { DeliveryType } from "./models/Delivery/DeliveryType";
import { Shipment } from "./models/shipment/Shipment";
import { ShipmentTracking } from "./models/shipment/ShipmentTracking";
import { ShipmentServices } from "./services/shipment/ShipmentServices";
import { ShipmentTrackingServices } from "./services/shipment/ShipmentTrackingServices";
import { Admin } from './models/user/Admin';
import { AdminServices } from './services/user/AdminServices';
import { Order } from './models/order/Order';


class CustomerUser extends User {
    constructor(userID: number, name: string, email: string, password: string) {
        super(userID, name, email, password, 'Customer');
    }
    
    displayInfo(): string {
        return `Customer: ${this.name}, Email: ${this.email}`;
    }
}

const userService = new UserServices();

const user1 = new CustomerUser(1, 'Linna', 'linna@gmail.com', 'password123');
const user2 = new CustomerUser(2, 'Sokha', 'sokha@gmail.com', 'securepass');

userService.register(user1);
userService.register(user2);

const duplicateUser = new CustomerUser(3, 'That', 'that@gmail.com', 'clonepass');
userService.register(duplicateUser); 

userService.login(user1); 
userService.login(new CustomerUser(0, 'Fake', 'bob@gmail.com', 'wrongpass')); 

console.log(userService.getUserDetails(user1));
console.log(user1.displayInfo());

userService.logout(user2);

//Shipment 



const types: DeliveryType[] = [
  DeliveryType.Express,
  DeliveryType.Standard,
  DeliveryType.SameDay,
  DeliveryType.Overnight
];

types.forEach((type) => {
  console.log(type);
});
const address = new Address("123 Main St", "Springfield", "IL", "62704", "USA");
const deliveryOption = new DeliveryOption(DeliveryType.Standard, 5);

const shipment = new Shipment(1, "TRACK123", deliveryOption, address);
const shipmentServices = new ShipmentServices();

shipmentServices.updateTrackingNumber(shipment, "TRACK456");

const newDeliveryOption = new DeliveryOption(DeliveryType.Express, 10);
shipmentServices.updateDeliveryMethod(shipment, newDeliveryOption);

const newAddress = new Address("456 Elm St", "Springfield", "IL", "62705", "USA");
shipmentServices.updateDestination(shipment, newAddress);

const trackingInfo = shipmentServices.trackShipment(shipment);
console.log(trackingInfo);

// Shipment tracking

const shipmentTracking = new ShipmentTracking("TRACK456", "In Transit");
shipmentServices.assignTracking(shipment, shipmentTracking);
shipmentServices.updateTrackingStatus(shipment, "Delivered");

const trackingServices = new ShipmentTrackingServices();
console.log(trackingServices.getTrackingInfo(shipmentTracking));
trackingServices.updateStatus(shipmentTracking, "Arrived at Facility");
console.log(trackingServices.getTrackingInfo(shipmentTracking));

//Admin

// Admin class
class Admins extends User {
    constructor(userID: number, name: string, email: string, password: string) {
        super(userID, name, email, password, 'Admin');
    }

    displayInfo(): string {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}

// Create admin and service instance
const admin = new Admin(100, 'SuperAdmin', 'admin@example.com', 'adminpass');
const adminService = new AdminServices();

// Create additional admin instances
const admin2 = new Admin(101, 'AdminJane', 'jane@example.com', 'janepass');
const admin3 = new Admin(102, 'AdminMike', 'mike@example.com', 'mikepass');
console.log(admin.displayInfo());
console.log(admin2);
console.log(admin3);




