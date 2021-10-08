import { Request, Response, NextFunction } from "express";
import { HttpError } from "../models/HttpError";
import { DeleteUserService } from "../services/DeleteUserService";
import { UserInterface } from "../models/User";

export class DeleteUserController {
  async handle(resquest: Request, response: Response, next: NextFunction) {
    const { userId } = resquest.params;

    const deleteUserService = new DeleteUserService();

    let user: UserInterface | null = null;

    try {
      user = await deleteUserService.execute(userId);
    } catch (err) {
      const error = new HttpError(err.message, 404);
      return next(error);
    }

    return response.json({ deltedUser: user.toObject({ getters: true }) });
  }
}
