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
   /**
 * Gets the user who performed the action.
 * @returns {User} The user associated with this log entry.
 */
public getUser(): User {
    return this.user;
}

/**
 * Gets the unique identifier for the log entry.
 * @returns {number} The log ID.
 */
public getLogID(): number {
    return this.logID;
}

/**
 * Gets the description of the action performed.
 * @returns {string} The action description.
 */
public getAction(): string {
    return this.action;
}

/**
 * Gets the name or type of the entity the action targeted.
 * @returns {string} The target entity name or type.
 */
public getTargetEntity(): string {
    return this.targetEntity;
}

/**
 * Gets the date and time when the action occurred.
 * @returns {Date} The timestamp of the log entry.
 */
public getTimestamp(): Date {
    return this.timestamp;
}

/**
 * Sets the description of the action performed.
 * @param {string} action - A description of what action was taken (e.g., "deleted order").
 */
public setAction(action: string): void {
    this.action = action;
}

/**
 * Sets the entity affected by the action.
 * @param {string} targetEntity - The name or type of the entity the action was performed on.
 */
public setTargetEntity(targetEntity: string): void {
    this.targetEntity = targetEntity;
}

/**
 * Sets the date and time of the action.
 * @param {Date} timestamp - The timestamp representing when the action occurred.
 */
public setTimestamp(timestamp: Date): void {
    this.timestamp = timestamp;
}

}

