import { User } from "./User";
import { Order } from "../order/Order";

export class Admin extends User {
    constructor(userID: number, name: string, email: string, password: string) {
        super(userID, name, email, password, 'Admin');
    }
/**
 * Returns the list of all users.
 * @param {User[]} users - The array of users to display.
 * @returns {User[]} The same array of users.
 */
viewAllUsers(users: User[]): User[] {
    return users;
}

/**
 * Returns the list of all orders.
 * @param {Order[]} orders - The array of orders to display.
 * @returns {Order[]} The same array of orders.
 */
viewAllOrders(orders: Order[]): Order[] {
    return orders;
}

/**
 * Placeholder method to manage refunds.
 * Logs a message indicating refund management.
 */
manageRefunds(): void {
    // Implement refund management logic here
    console.log("Managing refunds...");
}

/**
 * Returns a string representation of the admin's basic information.
 * @returns {string} The name and email of the admin.
 */
displayInfo(): string {
    return `Admin: ${this.name} (${this.email})`;
}

}