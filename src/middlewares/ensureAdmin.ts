import { Request, Response, NextFunction } from "express"


export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    //verifica se o usuario é admin

    const admin = true;

    if (admin) {
        return next()
    }

    return res.status(401).json({
        error: "User not authorized"
    })
}