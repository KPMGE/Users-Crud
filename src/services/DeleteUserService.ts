import User, { UserInterface } from "../models/User";

export class DeleteUserService {
  async execute(id: string): Promise<UserInterface> {
    let foundUser: UserInterface | null = null;

    try {
      foundUser = await User.findById(id);
    } catch (err) {
      throw new Error("Can't find user!");
    }

    if (!foundUser) {
      throw new Error("User does not exists!");
    }

    try {
      await foundUser.delete();
    } catch (err) {
      throw new Error("Can't delete user!");
    }

    return foundUser as UserInterface;
  }
}
