// Logic for what happens when user Logs In

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {hashSync, compareSync} from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";

const prisma = new PrismaClient();

export const loginController = async(req:Request, res:Response) => {
    const {email,password} = req.body;

    let user= await prisma.user.findFirst({ where:{email}})

    if(!user){
        alert("Account Not Found");
        return res.status(400).json({message:"Account Not Found"});
        
    }
    if(!compareSync(password, user.password)){
        alert("Invalid Password");
        return res.status(400).json({message:"Invalid Password"});
    }
    const token = jwt.sign({
        userId: user.id,
    }, JWT_SECRET)

    res.json({user,token});
}