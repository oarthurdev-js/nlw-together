import { ListTagsService } from "../services/ListTagsService";
import { Request, Response } from "express"


class ListTagsController {
    async handle(req: Request, res: Response) {
        const listTagsService = new ListTagsService();


        const tags = await listTagsService.execute()

        return res.json(tags)
    }
}

export { ListTagsController }