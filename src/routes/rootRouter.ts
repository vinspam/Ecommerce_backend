
import { Router } from "express";
import authRoutes from "./authRoutes";
import productsRoutes from "./productsRoute";

const rootRouter: Router =Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/products', productsRoutes);

export default rootRouter;