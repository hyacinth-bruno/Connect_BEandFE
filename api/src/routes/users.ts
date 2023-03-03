
import { Router } from "express";
import { createUser, logInUser, getUser } from "../controllers/users";



const userRouter = Router();

// // GET => endpoint: http://localhost:8000/users/
userRouter.post("/", createUser);
userRouter.post("/login", logInUser);
userRouter.get("/:id", getUser)


export default userRouter;
