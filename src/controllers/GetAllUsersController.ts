import { Request, Response, NextFunction } from "express";
import { HttpError } from "../models/HttpError";
import { GetAllUsersService } from "../services/GetAllUsersService";

export class GetAllUsersController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const getAllUsersService = new GetAllUsersService();

    let users;

    try {
      users = await getAllUsersService.execute();
    } catch (err) {
      const error = new HttpError(err.message, 404);
      return next(error);
    }

    response.json({
      users: users.map((user) => user.toObject({ getters: true })),
    });
  }
}
