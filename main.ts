//User
import { User } from './models/user/User';
import { UserServices } from './services/user/UserServices';

// Define a concrete subclass of User
class CustomerUser extends User {
  constructor(userID: number, name: string, email: string, password: string) {
    super(userID, name, email, password, 'Customer');
  }

  displayInfo(): string {
    return `Customer: ${this.name}, Email: ${this.email}`;
  }
}

// Main simulation
const userService = new UserServices();

const user1 = new CustomerUser(1, 'Linna', 'linna@gmail.com', 'password123');
const user2 = new CustomerUser(2, 'Sokha', 'sokha@gmail.com', 'securepass');

userService.register(user1);
userService.register(user2);

const duplicateUser = new CustomerUser(3, 'That', 'that@gmail.com', 'clonepass');
userService.register(duplicateUser); 

userService.login(user1); 
userService.login(new CustomerUser(0, 'Fake', 'bob@gmail.com', 'wrongpass')); 

console.log(userService.getUserDetails(user1));
console.log(user1.displayInfo());

userService.logout(user2);

//seller
