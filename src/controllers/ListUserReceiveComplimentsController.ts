import { Request, Response } from "express"
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService"

class ListUserReceiveComplimentsController {

    async handle(req: Request, res: Response) {
        const { user_id } = req

        const listUserSendComplimentsService = new ListUserReceiverComplimentsService()

        const compliments = await listUserSendComplimentsService.execute(user_id)
    }
}

export { ListUserReceiveComplimentsController }