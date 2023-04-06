import { Request, Response } from 'express';
import ProductsRepository from '../repositories/ProductsRepository';

class ProductController {
  async store(request: Request, response: Response) {
    const { categories, name, quantity, price } = request.body;

    await ProductsRepository.create({ categories, name, quantity, price });

    response.status(201).json({message: 'Product created successfully.'});
  }

  async index(request: Request, response: Response) {
    const products = await ProductsRepository.findAll();

    response.status(200).json(products);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const product = await ProductsRepository.findById(id);

    response.status(200).json(product);
  }
}

export default new ProductController();
