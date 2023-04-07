import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userBody } from '../utils/userBody';
import { User } from '../models/User';

dotenv.config();

class AuthController {
  async auth(request: Request, response: Response) {
    const { username, password } = userBody.parse(request.body);

    if (!username) {
      return response.status(400).json({ error: 'Username is required.' });
    }

    if (!password) {
      return response.status(400).json({ error: 'Password is required.' });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return response.status(404).json({ error: 'User not found.' });
    }

    const verifyPassword = user.password === password;

    if (!verifyPassword) {
      return response.status(400).json({ error: 'Invalid password.' });
    }

    try {
      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET as string,
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
