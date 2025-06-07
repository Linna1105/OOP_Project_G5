import { User } from '../../models/user/User';

export class UserServices {
 /**
 * Registers a new user if the email doesn't already exist.
 * @param user - The User object containing registration details like name, email, and password.
 * @returns true if registration succeeds; false if email already exists.
 */
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

/**
 * Logs in a user by checking if email and password match a registered user.
 * @param user - The User object with email and password used for authentication.
 * @returns true if login is successful; false otherwise.
 */
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

/**
 * Logs out a user.
 * @param user - The User object representing the user to log out.
 * @returns true indicating the logout action completed.
 */
logout(user: User): boolean {
  console.log(`${user.name} logged out.`);
  return true;
}

/**
 * Gets a string with user details for display or logging.
 * @param user - The User object whose details are being retrieved.
 * @returns A formatted string with the user's name and email.
 */
getUserDetails(user: User): string {
  return `${user.name} - Email: ${user.email}`;
}

}