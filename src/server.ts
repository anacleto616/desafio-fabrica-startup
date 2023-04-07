import 'express-async-errors';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { router } from './app/routes/routes';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017')
  .then( async () => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.use(
      (
        error: ErrorRequestHandler,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (error instanceof Error) {
          return response.status(400).json({
            message: error.message
          });
        }

        return response.sendStatus(500).json({
          status: 'error',
          message: `Internal server error - ${error}`
        });
      }
    );

    app.listen(3333, () => {
      console.log('🚀️ Server is running on http://localhost:3333');
    });

  })
  .catch(() => console.log('Error connecting to database!'));


