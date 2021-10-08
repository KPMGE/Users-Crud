import { Request, Response, NextFunction } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { HttpError } from "../models/HttpError";

interface UserInterface {
  id: string;
  name: string;
  description: string;
}

export class CreateUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    // service to save a user
    const createUserService = new CreateUserService();

    // getting information from body request
    const { id, name, description }: UserInterface = request.body;

    // tring to save user
    let newUser;
    try {
      newUser = await createUserService.execute({ id, name, description });
    } catch (err) {
      const error = new HttpError(err.message, 400);
      return next(error);
    }

    return response.json(newUser);
  }
}
