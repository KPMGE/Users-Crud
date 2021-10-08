import User from "../models/User";

interface UserInterface {
  name: string;
  description: string;
}

export class CreateUserService {
  async execute({ name, description }: UserInterface) {
    // create new user
    const newUser = new User({
      name,
      description,
    });

    // save to the database
    try {
      await newUser.save();
    } catch (err) {
      throw new Error("Can't save User!");
    }

    return newUser;
  }
}
