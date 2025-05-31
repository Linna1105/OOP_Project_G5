import { Admin } from "../../models/user/Admin";
import { User } from "../../models/user/User";
import { Order } from "../../models/order/Order";

export class AdminServices {
    viewAllUsers(admin: Admin, users: User[]): User[] {
        return admin.viewAllUsers(users);
    }

    viewAllOrders(admin: Admin, orders: Order[]): Order[] {
        return admin.viewAllOrders(orders);
    }

    manageRefunds(admin: Admin): void {
        admin.manageRefunds();
    }

    getAdminInfo(admin: Admin): string {
        return admin.displayInfo();
    }
}