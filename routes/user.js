import { Router } from "express";
import { loginUserValidator, registerUserValidator } from "../validators/user";

// create Router
const userRouter = Router();

// Defining routes
userRouter.post('/users/register', registerUserValidator, );

userRouter.post('/user/login', loginUserValidator);

