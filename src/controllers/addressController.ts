import { Request, Response } from "express";
import { AddressSchema } from "../schema/users";
import { prismaClient } from "..";

export const addAddress = async (req:any, res: Response)=>{
        
    AddressSchema.parse(req.body)
    const address = await prismaClient.addresses.create({
        data: {
            ...req.body,
            userId: req.user.id
        }
    })
    res.json(address);
};

export const delteAddress = async (req: Request, res: Response)=>{

};

export const listAddress = async (req: Request, res: Response)=>{

};