import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user: userAuthenticated, token } = await authenticateUser.execute({
    email,
    password,
  });

  const { name, displayName, id, createdAt, updatedAt } = userAuthenticated;

  const user = {
    name,
    displayName,
    email,
    id,
    createdAt,
    updatedAt,
  };

  // delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
