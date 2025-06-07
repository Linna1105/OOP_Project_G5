import { AuditLog } from "../../models/user/AuditLog";
import { User } from "../../models/user/User";

export class AuditLogServices {
    private static logs: AuditLog[] = [];
    private static nextId: number = 1;

    /**
 * Records a new audit log entry.
 * 
 * @param user - The User performing the action.
 * @param action - A description of the action performed.
 * @param target - The entity or target of the action (e.g., "Order", "Product").
 */
    public static recordAction(user: User, action: string, target: string): void {
        // Create a new AuditLog entry with a unique ID and timestamp
        const log = new AuditLog(
            this.nextId++,   // Incremental unique ID for each log
            action,
            user,
            target,
            new Date()       // Current date/time of the action
        );
        // Store the new log in the logs array
        this.logs.push(log);
    }

    /**
     * Retrieves all audit logs related to a specific user.
     * 
     * @param user - The User whose logs are being requested.
     * @returns An array of AuditLog entries performed by the given user.
     */
    public static getLogsByUser(user: User): AuditLog[] {
        return this.logs.filter(log => log.getUser() === user);
    }

    /**
     * Retrieves all audit logs recorded in the system.
     * 
     * @returns An array of all AuditLog entries.
     */
    public static getAllLogs(): AuditLog[] {
        return this.logs;
    }

}



