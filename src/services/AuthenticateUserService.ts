import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"
import { UserRepositories } from "../repositories/UserRepositories"
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest {
    email: string;
    password: string;
}


class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UserRepositories)

        //verifica se email existe
        const user = await userRepositories.findOne({ email })

        if (!user) {
            throw new Error("Email/Password incorrect")
        }
        //verifica se a senha esta correta

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }
        //gerar token
        const token = sign({
            email: user.email
        }, "26d1f820845ed9423d5b97a25b47982f", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }