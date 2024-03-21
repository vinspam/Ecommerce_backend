import { Router } from "express";
import { createProduct } from "../controllers/productController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

const productsRoutes:Router = Router();

productsRoutes.post('/create', [authMiddleware,adminMiddleware],createProduct);

export default productsRoutes;