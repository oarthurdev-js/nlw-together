import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";


export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {

    const { user_id } = req

    const userRepositories = getCustomRepository(UserRepositories)

    const { admin } = await userRepositories.findOne(user_id)

    //verifica se o usuario é admin
    if (admin) {
        return next()
    }

    return res.status(401).json({
        error: "User not authorized"
    })
}