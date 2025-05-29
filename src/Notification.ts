import { User } from "./User";

export class Notification {
    private user: User;
    private message: string;
    private type: string; 
    private title: string;
    private relatedOrder : Order;
    private createdAt: Date;
    private isRead: boolean;
    

    constructor(user: User, message: string,type:string, title: string, relatedOrder: OES_fbo_render_mipmap, createdAt: Date, isRead: boolean) {
        this.user = user;
        this.message = message;
        this.type = type;
        this.title = title;
        this.relatedOrder = relatedOrder;
        this.createdAt = createdAt;
        this.isRead = isRead;
    }
    getUser(): User {
        return this.user;
    }
    getMessage(): string {
        return this.message;
    }
    getType(): string {
        return this.type;
    }
    getTitle(): string {
        return this.title;
    }
    getRelatedOrder(): Order {
        return this.relatedOrder;
    }
    getCreatedAt(): Date {
        return this.createdAt;
    }
    isRead(): boolean {
        return this.isRead;
    }



}
