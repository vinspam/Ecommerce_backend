import {Request, Response} from 'express';
import  {PrismaClient}  from '@prisma/client';

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response)=>{


    const product = await prisma.product.create({
        data: {
            ...req.body,
            tags: req.body.tags.join(','),
        }
    })

    res.json(product);
}