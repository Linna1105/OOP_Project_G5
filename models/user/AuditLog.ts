import { User } from "../user/User";
export class AuditLog {
    private logID: number;
    private action: string;
    private user: User;
    private targetEntity: string;
    private timestamp: Date;
    constructor(logID: number, action: string, user: User, targetEntity: string, timestamp: Date) {
        this.logID = logID;
        this.action = action;
        this.user = user;
        this.targetEntity = targetEntity;
        this.timestamp = timestamp;
    }
    public getUser(): User {
        return this.user;
    }

    public getLogID(): number {
        return this.logID;
    }

    public getAction(): string {
        return this.action;
    }

    public getTargetEntity(): string {
        return this.targetEntity;
    }

    public getTimestamp(): Date {
        return this.timestamp;
    }

    public setAction(action: string): void {
        this.action = action;
    }

    public setTargetEntity(targetEntity: string): void {
        this.targetEntity = targetEntity;
    }

    public setTimestamp(timestamp: Date): void {
        this.timestamp = timestamp;
    }
}

