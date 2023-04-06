import { Product } from '../models/Product';
import { ProductType } from '../types/ProductType';

class ProductsRepository {
  async create({ categories, name, quantity, price }: ProductType) {
    const row = await Product.create({
      categories, name, quantity, price
    });

    return row;
  }

  async findAll() {
    const row = await Product.find();

    return row;
  }

  async findById(id: string) {
    const row = await Product.findById(id);

    return row;
  }
}

export default new ProductsRepository();
