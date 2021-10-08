import User, { UserInterface } from "../models/User";

export class GetAllUsersService {
  async execute() {
    let users: UserInterface[] | null = null;

    try {
      users = await User.find();
    } catch (err) {
      throw new Error("No users found!");
    }

    return users as UserInterface[];
  }
}
