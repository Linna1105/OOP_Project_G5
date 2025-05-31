import { User } from './models/User';
import { UserServices } from './services/UserServices';
class RegularUser extends User {
  displayInfo(): string {
    return `User ID: ${this.userID}, Name: ${this.name}, Email: ${this.email}`;
  }
}

const userService = new UserServices();


const user1 = new RegularUser(1, 'Alice', 'alice@example.com', 'password123');
const user2 = new RegularUser(2, 'Bob', 'bob@example.com', 'securepass');


userService.register(user1);
userService.register(user2);

const duplicateUser = new RegularUser(3, 'Alice Dup', 'alice@example.com', 'newpass');
userService.register(duplicateUser);


userService.login(user1);
userService.login(new RegularUser(0, 'Fake', 'fake@example.com', 'nopass')); // Fails


console.log(userService.getUserDetails(user2));


userService.logout(user2);

console.log(user1.displayInfo());


