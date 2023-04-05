import mongoose from 'mongoose';
import { Category } from '../src/app/models/Category';

mongoose
  .connect('mongodb://localhost:27017')
  .then( async () => {
    const drinks = await Category.create({
      _id: '507f1f77bcf86cd799439011',
      name: 'drinks',
    });

    await Category.create({
      parent: drinks.id,
      name: 'beers',
    });

    await Category.create({
      parent: drinks.id,
      name: 'wines',
    });

    await Category.create({
      parent: drinks.id,
      name: 'no-alcohol',
    });

    await Category.create({
      name: 'meat',
    });

    const drugstore = await Category.create({
      _id: '642dc18f78983c1eaf7b346a',
      name: 'drugstore',
    });

    await Category.create({
      parent: drugstore.id,
      name: 'remedies',
    });

    await Category.create({
      parent: drugstore.id,
      name: 'vitamins',
    });

    await Category.create({
      name: 'pets',
    });

    process.exit();
  })
  .catch(() => console.log('Error connecting to database!'));
