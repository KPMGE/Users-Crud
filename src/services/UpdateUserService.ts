import User, { UserInterface } from "../models/User";

export class UpdateUserService {
  async execute(
    id: string,
    name: string,
    description: string
  ): Promise<UserInterface> {
    // find user
    let foundUser: UserInterface | null = null;

    try {
      foundUser = await User.findById(id);
    } catch (err) {
      throw new Error("Can't find user to update!");
    }

    if (!foundUser) {
      throw new Error("User does not exists!");
    }

    // update user data
    foundUser.name = name;
    foundUser.description = description;

    // save updated user
    try {
      await foundUser.save();
    } catch (err) {
      throw new Error("Can't update user!");
    }

    return foundUser;
  }
}
