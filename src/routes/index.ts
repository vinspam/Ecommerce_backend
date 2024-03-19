// Root Router 
  // Will be defining all the routes here
    // This routes will call the belonging controller Routes

import { Router } from "express";
import { loginController } from "../controllers/loginController";

const rootRouter: Router =Router();

rootRouter.use('/login', loginController);

export default rootRouter;