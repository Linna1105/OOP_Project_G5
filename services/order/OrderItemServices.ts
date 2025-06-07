import { OrderItem } from "../../models/order/OrderItem";

export class OrderItemServices {
   /**
 * Retrieves the total cost of the given order item.
 *
 * @param orderItem - The OrderItem instance to get the total cost from.
 * @returns The total cost of the order item.
 */
getTotalCost(orderItem: OrderItem): number {
    return orderItem.getTotalCost(); // Delegates to the OrderItem's own method
}

}
