import { Order } from "../../models/order/Order";
import { OrderItem } from "../../models/order/OrderItem";

export class OrderServices {
   /**
 * Adds an OrderItem to the Order's items list and updates the total amount.
 * @param order - The Order object to add the item to.
 * @param item - The OrderItem to be added.
 */
addItem(order: Order, item: OrderItem): void {
    order.getItems().push(item);
    order.updateTotalAmount();
}

/**
 * Removes an OrderItem from the Order's items list if it exists and updates the total amount.
 * @param order - The Order object to remove the item from.
 * @param item - The OrderItem to be removed.
 */
removeItem(order: Order, item: OrderItem): void {
    const items = order.getItems();
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
    }
    order.updateTotalAmount();
}

/**
 * Calculates the total cost of all items in the Order.
 * @param order - The Order object whose total is calculated.
 * @returns The sum of total costs of all order items.
 */
calculateTotal(order: Order): number {
    return order.getItems().reduce((sum, item) => sum + item.getTotalCost(), 0);
}

/**
 * Retrieves the total amount from the Order's calculateTotal method.
 * @param order - The Order object.
 * @returns The total amount of the order.
 */
getTotalAmount(order: Order): number {
    return order.calculateTotal();
}

/**
 * Cancels a specific OrderItem from the Order and sets the order status to "Cancelled".
 * @param order - The Order object.
 * @param item - The OrderItem to cancel.
 */
cancelItem(order: Order, item: OrderItem): void {
    this.removeItem(order, item);
    order.setStatus("Cancelled");
}

}
