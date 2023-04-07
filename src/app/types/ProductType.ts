import { CategoryType } from './CategoryType';

export type ProductType = {
  categories: CategoryType[];
  name: string;
  quantity: number;
  price: number;
}
