import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // recenbendo o token e mapeando
    const authToken = req.headers.authorization

    //validar se o token está preenchido
    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")
    console.log(token);

    try {
        //verificar se o token é valido
        const { sub } = verify(token, "26d1f820845ed9423d5b97a25b47982f") as IPayload;

        //recuperar informaçoes do usuario
        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).end();
    }



}

