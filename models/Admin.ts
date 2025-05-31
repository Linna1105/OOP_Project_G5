import { User } from "./user/User";
import { Order } from "./Order";
import { Refund } from "./Refund";

export class Admin extends User {
    private users: User[] = [];
    private orders: Order[] = [];
    private refunds: Refund[] = [];

    constructor(userID: number, name: string, email: string, password: string) {
        super(userID, name, email, password);
    }
    public displayInfo(): void {
        console.log(`Admin Info -> ID: ${this.userID}, Name: ${this.name}, Email: ${this.email}`);
    
    }


    public viewAllUsers(): User[] {
        console.log("View All Users:");
        this.users.forEach(user => console.log(user.name));
        return this.users;
    }

    public manageUsers(action: string, user: User): void {
        if (action === "add") {
            this.users.push(user);
            console.log(`Admin added user: ${user.name}`);
        } else if (action === "remove") {
            this.users = this.users.filter(u => u.userID !== user.userID);
            console.log(`Admin removed user: ${user.name}`);
        }
    }

    public manageOrder(action: string, order: Order): void {
        if (action === "add") {
            this.orders.push(order);
            console.log(`Admin added order: ${order.orderID}`);
        } else if (action === "remove") {
            this.orders = this.orders.filter(o => o.orderID !== order.orderID);
            console.log(`Admin removed order: ${order.orderID}`);
        }
    }

    public manageRefund(refund: Refund): void {
        this.refunds.push(refund);
        console.log(`Admin processed refund: ${refund.refundId}`);
    }
}
