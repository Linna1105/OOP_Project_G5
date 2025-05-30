import { User } from '../models/User';

export class UserServices {
  register(user: User): boolean {
    const exists = User.users.some(u => u.email === user.email);
    if (exists) {
      console.log(`Registration failed: Email ${user.email} already exists.`);
      return false;
    }
    User.users.push(user);
    console.log(`${user.name} registered successfully.`);
    return true;
  }

  login(user: User): boolean {
    const found = User.users.find(
      u => u.email === user.email && u.password === user.password
    );
    if (found) {
      console.log(`${user.name} logged in successfully.`);
      return true;
    } else {
      console.log(`Login failed for ${user.name}.`);
      return false;
    }
  }

  logout(user: User): boolean {
    console.log(`${user.name} logged out.`);
    return true;
  }

  getUserDetails(user: User): string {
    return `${user.name} - Email: ${user.email}`;
  }
}