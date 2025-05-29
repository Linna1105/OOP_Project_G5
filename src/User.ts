export abstract class User {
    static users: User[] = []; // Simulated database

    userID: number;
    name: string;
    email: string;
    password: string;

    constructor(userID: number, name: string, email: string, password: string) {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    register(): boolean {
        // Check if email already exists
        const exists = User.users.some(user => user.email === this.email);
        if (exists) {
            console.log(`Registration failed: Email ${this.email} already exists.`);
            return false;
        }
        User.users.push(this);
        console.log(`${this.name} registered successfully.`);
        return true;
    }

    login(): boolean {
        // Check if user exists with matching email and password
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

    logout(): boolean {
        // Simulate logout
        console.log(`${this.name} logged out.`);
        return true;
    }
}