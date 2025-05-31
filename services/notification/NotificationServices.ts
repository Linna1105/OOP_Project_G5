import { Notification } from "../../models/notification/Notification";

export class NotificationServices {
    markAsRead(notification: Notification): void {
        notification.markAsRead();
    }

    markAsUnread(notification: Notification): void {
        notification.markAsUnread();
    }

    getNotificationSummary(notification: Notification): string {
        return `[${notification.getType()}] ${notification.getTitle()}
Message: ${notification.getMessage()}
Order: ${notification.getRelatedOrder() ? notification.getRelatedOrder()!.getOrderID() : "N/A"}
Date: ${notification.getCreatedAt().toLocaleString()}
Read: ${notification.getIsRead() ? "Yes" : "No"}`;
    }
}