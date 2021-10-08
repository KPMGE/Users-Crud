import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();

const route = Router();

// create a new user and stores it into the database
route.post("/new/user", createUserController.handle);

// get a user by id
route.get("/users/:userId", getUserByIdController.handle);

export default route;
