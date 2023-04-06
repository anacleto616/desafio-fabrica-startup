import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
  id: string;
};

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
      '09513b3b-d017-4b8d-be57-5df1f2bf0eaa'
    ) as JwtPayload;

    next();
  }
}

export default new AuthMiddleware();
