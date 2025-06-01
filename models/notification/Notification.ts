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

    getUser(): User {
        return this.user;
    }

    getType(): string {
        return this.type;
    }

    getTitle(): string {
        return this.title;
    }

    getMessage(): string {
        return this.message;
    }

    getRelatedOrder(): Order | null {
        return this.relatedOrder;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getIsRead(): boolean {
        return this.isRead;
    }

    markAsRead(): void {
        this.isRead = true;
    }

    markAsUnread(): void {
        this.isRead = false;
    }
}