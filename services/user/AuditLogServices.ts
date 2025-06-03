import { AuditLog } from "../../models/user/AuditLog"; 
import { User } from "../../models/user/User"; 

export class AuditLogService {
    private static logs: AuditLog[] = [];
    private static nextId: number = 1;

     public static recordAction(user: User, action: string, target: string): void {
        const log = new AuditLog(
            this.nextId++,
            action,
            user,
            target,
            new Date()
        );
        this.logs.push(log);
    }


    public static getLogsByUser(user: User): AuditLog[] {
        return this.logs.filter(log => log.getUser() === user);
    }

    public static getAllLogs(): AuditLog[] {
        return this.logs;
    }
}

