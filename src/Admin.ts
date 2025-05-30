import { User } from "./User";
import { Order } from "./Order";

 export class Admin extends User{
    private users: User[];
    private orders: Order[] = [];
    private refunds: Refund[];

    constructor(userid: number, name: string, email:string, password: string ){
        super(userid,name,email,password)
        this.users = [];
        this.orders = [];
        this.refunds = [];
    }
    public viewAllUser(): User[] {
        console.log("View All User");
        this.users.forEach(user => console.log(user.name));
        return this.users
    }

    public manageUsers(action: string, user: User): void {
        if (action === "add") {
            this.users.push(user);
            console.log(`Admin added user: ${user.name}`);
        } else if (action === "remove") {
            this.users = this.users.filter(u => u.userID !== user.userID);
            console.log(`Admin removed user: ${user.name}`);
        }
    }
    public manageOrder(action:string, order:string):void{
        if(action === "add"){
            this.orders.push(this.orders);
            console.log(`Admin added order: ${order}`);
            
        }else if(action === "remove"){
            this.orders = this.orders.filter(o => o !== order);
            console.log(`Admin removed order:${order}`);
            
        }

    }
    public manageRefund(refund:string):void{
        this.refunds.push(refund);
        console.log(`Admin process refound:${refund}`);
        

    }
}