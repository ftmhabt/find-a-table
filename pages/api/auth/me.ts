import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import * as jose from 'jose';
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const bearerToken=req.headers["authorization"] as string

    if(!bearerToken){
        return res.status(401).json({ errorMessage: "unauthorized" })
    }

    const token =bearerToken.split(" ")[1];

    if(!token)
    {
        return res.status(401).json({ errorMessage: "unauthorized" })
    }

    const secret =new TextEncoder().encode(process.env.JWT_SECRET);
    try{
        await jose.jwtVerify(token,secret)
    }
    catch(error){
        return res.status(401).json({ errorMessage: "unauthorized" })
    
    }

    const payload=jwt.decode(token) as {email:string}

    if(!payload.email){
        return res.status(401).json({ errorMessage: "unauthorized" })
    }

    const user =await prisma.user.findUnique({
        where:{
            email:payload.email
        }
    })

    return res.status(200).json({user});
}