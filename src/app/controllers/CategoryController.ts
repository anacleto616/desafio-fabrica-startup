import { Request, Response } from 'express';
import CategoriesRepository from '../repositories/CategoriesRepository';

class CategoryController {
  async index(request: Request, response: Response){
    const categories = await CategoriesRepository.findAll();

    response.status(200).json(categories);
  }
}

export default new CategoryController();
