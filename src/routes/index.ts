// Root Router 
  // Will be defining all the routes here
    // This routes will call the belonging controller Routes

import { Router } from "express";
import { signupController } from "../controllers/signupController";
import { loginController } from "../controllers/loginController";

const rootRouter: Router =Router();

rootRouter.use('/signup', signupController);
rootRouter.use('/login', loginController);

export default rootRouter;