import { Request, Response, NextFunction } from "express";
import { GetUserByIdService } from "../services/GetUserByIdService";
import { HttpError } from "../models/HttpError";
import { UserInterface } from "../models/User";

export class GetUserByIdController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { userId } = request.params;

    const getUserByIdService = new GetUserByIdService();

    let foundUser: UserInterface;
    try {
      foundUser = await getUserByIdService.execute(userId);
    } catch (err) {
      const error = new HttpError(err.message, 404);
      return next(error);
    }

    return response.json({ user: foundUser.toObject({ getters: true }) });
  }
}
