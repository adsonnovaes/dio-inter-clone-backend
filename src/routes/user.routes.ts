import { Router } from 'express';

const userRouter = Router();

userRouter.post('/signin', (request, response) => {
  return response.send("Entrando com o usuário")
})

userRouter.post('/signup', (request, response) => {
  return response.send("Saindo com o usuário")
})

export default userRouter;