//These functions handle incoming requests to specific routes. 
//They typically call corresponding methods in your controllers to execute the necessary business logic.


import { Router } from 'express';
import { login } from '../controllers/loginController';
const loginAuth:Router = Router();

loginAuth.get('/login', login );