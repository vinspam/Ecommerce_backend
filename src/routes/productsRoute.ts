import { Router } from "express";
import { createProduct } from "../controllers/productController";
import { authMiddleware } from "../middlewares/authMiddleware";

const productsRoutes:Router = Router();

productsRoutes.post('/create', authMiddleware,createProduct);

export default productsRoutes;