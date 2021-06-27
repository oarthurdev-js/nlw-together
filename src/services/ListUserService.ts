import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { classToPlain } from "class-transformer"

class ListUserService {

    async execute() {
        const usersRepository = getCustomRepository(UserRepositories)

        const users = await usersRepository.find()

        return classToPlain(users)
    }
}

export { ListUserService }