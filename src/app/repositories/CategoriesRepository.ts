import { Category } from '../models/Category';

class CategoriesRepository {
  async findAll() {
    const row = await Category.find();

    return row;
  }
}

export default new CategoriesRepository();
