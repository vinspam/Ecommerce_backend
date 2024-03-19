// Logic for what happens when user Logs In

import { Request, Response } from "express";

export const loginController = (req:Request, res:Response) => {
    res.send('Login Route Working...');
}