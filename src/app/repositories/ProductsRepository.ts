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

  async findByName(name: string){
    const row = await Product.findOne({ name });

    return row;
  }

  async update(id: string, { categories, name, quantity, price }: ProductType) {
    const row = await Product.findByIdAndUpdate(id, { categories, name, quantity, price });

    return row;
  }

  async delete(id: string) {
    const deleteOp = await Product.findByIdAndDelete(id);

    return deleteOp;
  }
}

export default new ProductsRepository();
