import { Admin } from "../../models/user/Admin";
import { User } from "../../models/user/User";
import { Order } from "../../models/order/Order";

export class AdminServices {
    /**
  * Retrieves all users by delegating the call to the Admin instance.
  * 
  * @param admin - The Admin performing the action.
  * @param users - The array of all users to view.
  * @returns The full list of users.
  */
    viewAllUsers(admin: Admin, users: User[]): User[] {
        return admin.viewAllUsers(users);
    }

    /**
     * Retrieves all orders by delegating the call to the Admin instance.
     * 
     * @param admin - The Admin performing the action.
     * @param orders - The array of all orders to view.
     * @returns The full list of orders.
     */
    viewAllOrders(admin: Admin, orders: Order[]): Order[] {
        return admin.viewAllOrders(orders);
    }

    /**
     * Triggers refund management actions in the Admin instance.
     * 
     * @param admin - The Admin who manages refunds.
     */
    manageRefunds(admin: Admin): void {
        admin.manageRefunds();
    }

    /**
     * Retrieves a display string summarizing the Admin's info.
     * 
     * @param admin - The Admin instance.
     * @returns A string with admin details.
     */
    getAdminInfo(admin: Admin): string {
        return admin.displayInfo();
    }

}