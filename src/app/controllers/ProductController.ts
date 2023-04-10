import { Request, Response } from 'express';
import ProductsRepository from '../repositories/ProductsRepository';
import CategoriesRepository from '../repositories/CategoriesRepository';
import { productBody } from '../utils/productBody';
import { categoryBody } from '../utils/categoryBody';

class ProductController {
  async store(request: Request, response: Response) {
    const { categories, name, quantity, price } = productBody.parse(request.body);

    const nameExists = await ProductsRepository.findByName(name);

    if (nameExists) {
      return response.status(400).json({error: 'This name is already in use for another product.'});
    }

    const safeCategories = [];

    for (const category of categories) {
      const categoryItemList = await CategoriesRepository.findByName(category.name);
      safeCategories.push(categoryItemList);
    }

    const categoriesExists = safeCategories.includes(null);

    if (categoriesExists) {
      return response.status(400).json({
        error: 'Some category entered is not in the list.',
      });
    }

    const okayCategories = categoryBody.parse(safeCategories);

    await ProductsRepository.create({ categories: okayCategories, name, quantity, price });

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

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { categories, name, quantity, price } = productBody.parse(request.body);

    const nameExists = await ProductsRepository.findByName(name);

    if (nameExists && nameExists.name !== name) {
      return response.status(400).json({error: 'This name is already in use for another product.'});
    }

    const safeCategories = [];

    for (const category of categories) {
      const categoryItemList = await CategoriesRepository.findByName(category.name);
      safeCategories.push(categoryItemList);
    }

    const categoriesExists = safeCategories.includes(null);

    if (categoriesExists) {
      return response.status(400).json({
        error: 'Some category entered is not in the list.',
      });
    }

    const okayCategories = categoryBody.parse(safeCategories);

    await ProductsRepository.update(id,
      {
        categories: okayCategories,
        name,
        quantity,
        price
      }
    );

    response.status(200).json({ message: 'Successfully updated product.' });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    await ProductsRepository.delete(id);

    response.sendStatus(204);
  }
}

export default new ProductController();
