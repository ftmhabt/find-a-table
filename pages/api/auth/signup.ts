import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

export default function signup(req: NextApiRequest, res: NextApiResponse) {

    const { name, email, phone, city, password } = req.body;
    
    const errors: string[] = [];

    const validationSchema = [
        {
            valid: validator.isLength(name, {
                min: 5,
                max: 30
            }),
            errorMessage: "Name is invalid"
        },
        {
            valid: validator.isEmail(email),
            errorMessage: "Email is invalid"
        },
        {
            valid: validator.isMobilePhone(phone),
            errorMessage: "Phone number is invalid"
        },
        {
            valid: validator.isLength(city, {
                min: 2
            }),
            errorMessage: "City is invalid"
        },
        {
            valid: validator.isStrongPassword(password),
            errorMessage: "Password is invalid"
        }
    ];

    validationSchema.forEach((check) => {
        if (!check.valid) {
            errors.push(check.errorMessage)
        }
    })

    if (errors.length) {
        res.status(400).json({ errorMessage: errors[0] })
    }
    if (req.method === 'post')
        res.status(200).json({
            hello: 'there'
        })
}