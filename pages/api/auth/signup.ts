import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
export default function signup(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'post')
        res.status(200).json({
            hello: 'there'
        })
}