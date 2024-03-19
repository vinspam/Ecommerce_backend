import { Router } from "express";
import { login } from "../controllers/loginController";

const rootRouter: Router =Router();

rootRouter.use('/login', login);

export default rootRouter;