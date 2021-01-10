import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const { name, displayName, id, createdAt, updatedAt } = user;

  const userValidated = {
    User: {
      name,
      displayName,
      email,
      id,
      createdAt,
      updatedAt,
    },
  };

  return response.json({ userValidated, token });
});

export default sessionsRouter;
