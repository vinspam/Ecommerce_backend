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
          try {
            await prismaClient.addresses.delete({
                where: {
                    id: +req.params.id
                }
            });
            res.status(200).json({message:"success"})
          } 
          catch (error) {
            res.status(404).json({ message: "User Not Found"});
          }
};

export const listAddress = async (req: any, res: Response)=>{
        const addresses = await prismaClient.addresses.findMany({
            where: {
                userId: req.user.id
            }
        })

        res.json(addresses);
};

export const updateUser = async (req: any, res: Response)=>{


}
;