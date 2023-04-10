import { Category } from '../models/Category';

class CategoriesRepository {
  async findAll() {
    const row = await Category.find();

    return row;
  }

  async findByName(name: string) {
    const row = await Category.findOne({ name });

    return row;
  }
}

export default new CategoriesRepository();
