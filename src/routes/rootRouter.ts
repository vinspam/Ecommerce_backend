// Root Router 
  // Will be defining all the routes here
    // This routes will call the belonging controller Routes

import { Router } from "express";
import authRoutes from "./authRoutes";

const rootRouter: Router =Router();

rootRouter.use('/auth', authRoutes);

export default rootRouter;