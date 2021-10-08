import { Request, Response, NextFunction } from "express";
import { UpdateUserService } from "../services/UpdateUserService";
import { HttpError } from "../models/HttpError";
import { UserInterface } from "../models/User";

export class UpdateUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    // get data from request
    const { name, description }: UserInterface = request.body;
    const { userId } = request.params;

    const updateUserService = new UpdateUserService();

    let updatedUser: UserInterface | null = null;

    try {
      updatedUser = await updateUserService.execute(userId, name, description);
    } catch (err) {
      const error = new HttpError(err.message, 404);
      return next(error);
    }

    return response.json({ updatedUser });
  }
}
