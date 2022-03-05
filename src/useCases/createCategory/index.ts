import { CategoryRepository } from '../../repository/implementation/CategoryRepository';
import { CreateCategoryCase } from './CreateCategoryCase';
import { CreateCategoryController } from './CreateCategoryController';

const createCategoryCase = new CreateCategoryCase(new CategoryRepository());
const createCategoryController = new CreateCategoryController(
  createCategoryCase,
);

export { createCategoryCase, createCategoryController };
