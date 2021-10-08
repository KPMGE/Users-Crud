import express, { Request, Response, NextFunction } from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";

import { HttpError } from "./models/HttpError";
import route from "./routes";

const app = express();

dotenv.config();
app.use(express.json());

app.use(route);

// catch wrong routes
app.use(
  (
    error: HttpError,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    return next(new HttpError("This route does not exists!", 404));
  }
);

// catch errors
app.use(
  (
    error: HttpError,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof HttpError) {
      response.status(error.errorCode || 500);
      response.json({ errorMessage: error.message || "Unknown error" });
    }
  }
);

// connecting database
const databaseUri = process.env.DB_URI;
(async () => {
  try {
    await connect(databaseUri as string);
    console.log("Connected to the database!");
  } catch (err) {
    throw new Error("Can't connect to the database");
  }
})();

// running server
const portServer = process.env.SERVER_PORT || 3000;
app.listen(portServer, () => {
  console.log(`Listening on port ${portServer}`);
});
