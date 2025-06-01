import { Order } from "../../models/order/Order";
import { OrderItem } from "../../models/order/OrderItem";

export class OrderServices {
    addItem(order: Order, item: OrderItem): void {
        order.getItems().push(item);
        order.updateTotalAmount();
    }

    removeItem(order: Order, item: OrderItem): void {
        const items = order.getItems();
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }
        order.updateTotalAmount();
    }

    calculateTotal(order: Order): number {
        return order.getItems().reduce((sum, item) => sum + item.getTotalCost(), 0);
    }

    getTotalAmount(order: Order): number {
        return order.calculateTotal();
    }

    cancelItem(order: Order, item: OrderItem): void {
        this.removeItem(order, item);
        order.setStatus("Cancelled");
    }
}
