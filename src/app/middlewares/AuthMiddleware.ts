import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';

type JwtPayload = {
  id: string;
};

dotenv.config();

class AuthMiddleware {
  async authenticationMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { authorization } = request.headers;

    if (!authorization) {
      response.status(401).json({ error: 'Unauthorized user' });
    }

    const token = authorization?.split(' ')[1] || '';

    const { id } = jwt.verify(
      token,
      process.env.SECRET as string
    ) as JwtPayload;

    const user = await User.findById(id);

    if (!user) {
      return response.status(401).json({ error: 'Unauthorized user' });
    }

    next();
  }
}

export default new AuthMiddleware();
