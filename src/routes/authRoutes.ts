import {Router} from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';

const authRoutes:Router = Router()

authRoutes.post('/signup');
authRoutes.post('/login');
authRoutes.get('/me', authMiddleware)

export default authRoutes