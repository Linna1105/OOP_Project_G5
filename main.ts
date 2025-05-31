import { Admin } from "./models/Admin";
import { User } from "./models/User";
import { Order } from "./models/Order";
import { Refund } from "./models/Refund";
import { OrderItem } from "./models/OrderItem"; // NEW

// Create an Admin
const admin = new Admin(1, "Super Admin", "admin@example.com", "admin123");

// Dummy user
const user = new class extends User {
    displayInfo(): void {
        console.log(`User: ${this.name}`);
    }
}(2, "Test User", "user@example.com", "pass");

// Add user
admin.manageUsers("add", user);

// Create order item
const orderItem = new OrderItem(101, "Gaming Mouse", 1, 49.99);

// Create refund using required constructor
const refund = new Refund(
    1,                   // refundID
    orderItem,           // orderItem
    49.99,               // amount
    new Date(),          // refundDate
    "Processed"          // status
);

// Process refund
admin.manageRefund(refund);
