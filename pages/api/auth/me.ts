import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const bearerToken = req.headers["authorization"] as string

    const token = bearerToken.split(" ")[1];

    const payload = jwt.decode(token) as { email: string }

    if (!payload.email) {
        return res.status(401).json({ errorMessage: "unauthorized" })
    }

    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    })

    if(!user){
        return res.status(401).json({ errorMessage: "user not found" })
    }

    return res.status(200).json({ 
        id:user.id,
        name:user.name,
        city: user.city,
        phone:user.phone,
     });
}