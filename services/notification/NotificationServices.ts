import { Notification } from "../../models/notification/Notification";

export class NotificationServices {
   /**
 * Marks the given notification as read.
 *
 * @param notification - The Notification object to mark as read.
 */
markAsRead(notification: Notification): void {
    notification.markAsRead();
}

/**
 * Marks the given notification as unread.
 *
 * @param notification - The Notification object to mark as unread.
 */
markAsUnread(notification: Notification): void {
    notification.markAsUnread();
}

/**
 * Generates a summary string for the given notification.
 *
 * @param notification - The Notification object to summarize.
 * @returns A formatted string with notification details.
 */
getNotificationSummary(notification: Notification): string {
    return `[${notification.getType()}] ${notification.getTitle()}
Message: ${notification.getMessage()}
Order: ${notification.getRelatedOrder() ? notification.getRelatedOrder()!.getOrderID() : "N/A"}
Date: ${notification.getCreatedAt().toLocaleString()}
Read: ${notification.getIsRead() ? "Yes" : "No"}`;
}

}