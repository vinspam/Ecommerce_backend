//These functions handle incoming requests to specific routes. 
//They typically call corresponding methods in your controllers to execute the necessary business logic.


import { Router } from 'express';
import { loginController } from '../controllers/loginController';
const loginAuth:Router = Router();

loginAuth.get('/login', loginController );