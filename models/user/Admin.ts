import { User } from "./User";
import { Order } from "../order/Order";

export class Admin extends User {
    constructor(userID: number, name: string, email: string, password: string) {
        super(userID, name, email, password, 'Admin');
    }

    viewAllUsers(users: User[]): User[] {
        return users;
    }

    viewAllOrders(orders: Order[]): Order[] {
        return orders;
    }

    manageRefunds(): void {
        // Implement refund management logic here
        console.log("Managing refunds...");
    }

    displayInfo(): string {
        return `Admin: ${this.name} (${this.email})`;
    }
}