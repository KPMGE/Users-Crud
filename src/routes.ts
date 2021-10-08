import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const createUserController = new CreateUserController();

const route = Router();

route.post("/user", createUserController.handle);

route.get("/test", (req, res) => {
  res.send("working");
});

export default route;
