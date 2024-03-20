// Logic for what happens when user Signups

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {hashSync} from "bcrypt";

const prisma = new PrismaClient();

export const signupController = async(req:Request, res:Response) => {
    const {email,password,name} = req.body;

    let user= await prisma.user.findFirst({ where:{email}})

    if(user){
        alert("User already exists");
        return res.status(400).json({message:"User already exists"});
        
    }
    user = await prisma.user.create({
        data:
            {  name,
               email,
               password: hashSync(password, 10)
            }
    })

    res.json(user);
}