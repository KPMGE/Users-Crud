import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const getAllUsersController = new GetAllUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

const route = Router();

// get a user by id
route.get("/users/:userId", getUserByIdController.handle);

// get all users
route.get("/users", getAllUsersController.handle);

// create a new user and stores it into the database
route.post("/new/user", createUserController.handle);

// updating user
route.patch("/update/user/:userId", updateUserController.handle);

// deleting user
route.delete("/delete/user/:userId", deleteUserController.handle);

export default route;
