export class AuditLog {
    private logID: number;
    private action: string;
    private user: string;
    tagerEnttity: string;
    private timestamp: Date;
    constructor(logID: number, action: string, user: string, tagerEnttity: string, timestamp: Date) {
        this.logID = logID;
        this.action = action;
        this.user = user;
        this.tagerEnttity = tagerEnttity;
        this.timestamp = timestamp;
    }
}

