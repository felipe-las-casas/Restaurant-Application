import type { NextFunction, Request, Response } from "express";
import pkg from 'jsonwebtoken';
const { verify } = pkg;

interface PayLoad {
    sub: string;
}

export function isAutheticated(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        req.user_id = sub;
        return next();
    } catch(err) {
        return res.status(401).end();
    }

}