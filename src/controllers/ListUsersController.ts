import { ListUserService } from "../services/ListUserService"
import { Request, Response } from "express"

class ListUserController {

    async handle(req: Request, res: Response<Response>) {
        const listUserService = new ListUserService()
        const users = await listUserService.execute()


    }
}


export { ListUserController }