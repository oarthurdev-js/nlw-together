import { Router } from "express"
import { CreateUserController } from './src/controllers/CreateUserController'
import { CreateTagController } from './src/controllers/CreateTagController'
import { ensureAdmin } from './src/middlewares/ensureAdmin'
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController"
import { CreateComplimentController } from "./src/controllers/CreateComplementController"
import { ensureAuthenticated } from "./src/middlewares/ensureAuthenticated"
import { ListUserSendComplimentsController } from "./src/controllers/ListUserSendComplimentscontroller"
import { ListUserReceiveComplimentsController } from "./src/controllers/ListUserReceiveComplimentsController"
import { ListTagsController } from "./src/controllers/ListTagsController"
import { ListUserController } from "./src/controllers/ListUsersController"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const autheticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUserController()



router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/users", (createUserController.handle))
router.post("/login", autheticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)


export { router }