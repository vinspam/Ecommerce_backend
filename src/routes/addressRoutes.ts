import {Router} from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { addAddress, delteAddress, listAddress } from '../controllers/addressController';

const addressRoute:Router = Router()

addressRoute.post('/postAddress', authMiddleware, addAddress);
addressRoute.delete('/:id', authMiddleware, delteAddress);
addressRoute.get('/list', authMiddleware, listAddress)

export default addressRoute