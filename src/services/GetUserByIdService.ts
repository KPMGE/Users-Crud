import User, { UserInterface } from "../models/User";

export class GetUserByIdService {
  async execute(id: string): Promise<UserInterface> {
    let userFound: UserInterface | null;

    try {
      userFound = await User.findById(id);
    } catch (err) {
      throw new Error("User not found!");
    }

    return userFound as UserInterface;
  }
}
