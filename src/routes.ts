import { Request, Response, Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"

const router = Router()

const createUserController = new CreateUserController()


router.post("/users", createUserController.handle)
router.get('/users', (req: Request, res: Response) => res.send({ message: 'hellolasodsaoasdfo'}))


export { router }