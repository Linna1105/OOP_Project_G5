import { User } from "../user/User";
import { Order } from "../order/Order";

export class Notification {
    private user: User;
    private type: string;
    private title: string;
    private message: string;
    private relatedOrder: Order | null;
    private createdAt: Date;
    private isRead: boolean;

    constructor(
        user: User,
        type: string,
        title: string,
        message: string,
        relatedOrder: Order | null = null,
        createdAt: Date = new Date(),
        isRead: boolean = false
    ) {
        this.user = user;
        this.type = type;
        this.title = title;
        this.message = message;
        this.relatedOrder = relatedOrder;
        this.createdAt = createdAt;
        this.isRead = isRead;
    }

    /**
 * Returns the user associated with this entity.
 * @returns {User} The user object.
 */
    getUser(): User {
        return this.user;
    }

    /**
     * Returns the type of the entity (e.g., notification type).
     * @returns {string} The type as a string.
     */
    getType(): string {
        return this.type;
    }

    /**
     * Returns the title or subject of the entity.
     * @returns {string} The title text.
     */
    getTitle(): string {
        return this.title;
    }

    /**
     * Returns the detailed message or content.
     * @returns {string} The message text.
     */
    getMessage(): string {
        return this.message;
    }

    /**
     * Returns the related order if any.
     * @returns {Order | null} The related order object or null if none.
     */
    getRelatedOrder(): Order | null {
        return this.relatedOrder;
    }

    /**
     * Returns the creation date/time of this entity.
     * @returns {Date} The date/time when this was created.
     */
    getCreatedAt(): Date {
        return this.createdAt;
    }

    /**
     * Returns whether this entity has been marked as read.
     * @returns {boolean} True if read, false otherwise.
     */
    getIsRead(): boolean {
        return this.isRead;
    }

    /**
     * Marks this entity as read.
     * Sets the isRead flag to true.
     */
    markAsRead(): void {
        this.isRead = true;
    }

    /**
     * Marks this entity as unread.
     * Sets the isRead flag to false.
     */
    markAsUnread(): void {
        this.isRead = false;
    }

}