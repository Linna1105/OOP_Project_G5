// Admin.ts
import { User } from "./user/User";
import { Order } from "./Order";
import { Refund } from "./Refund";

export class Admin extends User {
    private users: User[] = [];
    private orders: Order[] = [];
    private refunds: Refund[] = [];

    public displayInfo(): void {
        console.log(`Admin Info -> ID: ${this.userID}, Name: ${this.name}, Email: ${this.email}`);
    
    }

    public viewAllUsers(): User[] {
        console.log("Admin viewing all users:");
        this.users.forEach(user => console.log(user));
        return this.users;
    }


    public manageUser(user: User, action: "add" | "remove"): void {
        if (action === "add") {
            this.users.push(user);
        } else if (action === "remove") {
            this.users = this.users.filter(u => u !== user);
        }
    }

    public viewAllOrders(): Order[] {
        console.log("Admin viewing all orders:");
        return this.orders;
    }

    public manageRefunds(): void {
        console.log("Admin managing refunds:");
        this.refunds.forEach(refund => console.log(refund));
    }
}
