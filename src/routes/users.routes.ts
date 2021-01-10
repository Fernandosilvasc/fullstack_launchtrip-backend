import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, displayName, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    displayName,
    email,
    password,
  });

  const { id, createdAt, updatedAt } = user;

  const userValidated = { name, displayName, email, id, createdAt, updatedAt };

  return response.json(userValidated);
});

export default usersRouter;
