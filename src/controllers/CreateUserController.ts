import { Request, Response, NextFunction } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { HttpError } from "../models/HttpError";

interface UserInterface {
  name: string;
  description: string;
}

export class CreateUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    // service to save a user
    const createUserService = new CreateUserService();

    // getting information from body request
    const { name, description }: UserInterface = request.body;

    // tring to save user
    let newUser: unknown;
    try {
      newUser = await createUserService.execute({ name, description });
    } catch (err) {
      const error = new HttpError(err.message, 400);
      return next(error);
    }

    return response.json(newUser);
  }
}
