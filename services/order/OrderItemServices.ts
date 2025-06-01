import { OrderItem } from "../../models/order/OrderItem";

export class OrderItemServices {
    getTotalCost(orderItem: OrderItem): number {
        return orderItem.getTotalCost(); // now just calls the model method
    }
}
