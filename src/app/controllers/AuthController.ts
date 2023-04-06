import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class AuthController {
  async auth(request: Request, response: Response) {
    const { username, password } = request.body;

    if (!username) {
      return response.status(400).json({ error: 'Username is required.' });
    }

    if (!password) {
      return response.status(400).json({ error: 'Password is required.' });
    }

    try {
      const token = jwt.sign(
        '642f1bb6b32d581bc833886c',
        '09513b3b-d017-4b8d-be57-5df1f2bf0eaa',
        { expiresIn: '24h' }
      );

      response
        .status(200)
        .json({ message: 'User authenticated successfully.', token });
    } catch (error) {
      console.log(error);

      response
        .status(500)
        .json({ error: 'Internal server error, please try again.' });
    }
  }
}

export default new AuthController();
