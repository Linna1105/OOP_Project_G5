export abstract class User {
    protected static users: User[] = []; 

    protected userID: number;
    protected name: string;
    protected email: string;
    protected password: string;

    constructor(userID: number, name: string, email: string, password: string) {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Abstract method for displaying user info
    abstract displayInfo(): string;

    // Register user if email not already used
    register(): boolean {
        const exists = User.users.some(user => user.email === this.email);
        if (exists) {
            console.log(`Registration failed: Email ${this.email} already exists.`);
            return false;
        }
        User.users.push(this);
        console.log(`${this.name} registered successfully.`);
        return true;
    }

    // Login user if email and password match
    login(): boolean {
        const found = User.users.find(
            user => user.email === this.email && user.password === this.password
        );
        if (found) {
            console.log(`${this.name} logged in successfully.`);
            return true;
        } else {
            console.log(`Login failed for ${this.name}.`);
            return false;
        }
    }

    // Logout user
    logout(): boolean {
        console.log(`${this.name} logged out.`);
        return true;
    }

    // Get user details
    getUserDetails(): string {
        return `${this.name} - Email: ${this.email}`;
    }

    // Getters for subclasses or external use
    getUserID(): number { return this.userID; }
    getName(): string { return this.name; }
    getEmail(): string { return this.email; }
}