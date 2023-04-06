import { Request, Response } from 'express';
import ProductsRepository from '../repositories/ProductsRepository';

class ProductController {
  async store(request: Request, response: Response) {
    const { categories, name, quantity, price } = request.body;

    await ProductsRepository.create({ categories, name, quantity, price });

    response.status(201).json({message: 'Product created successfully.'});
  }
}

export default new ProductController();
