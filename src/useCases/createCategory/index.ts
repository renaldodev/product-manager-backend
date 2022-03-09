import { ImgbbUploadProvider } from '../../provider/implementation/ImgbbUploadProvider';
import { CategoryRepository } from '../../repository/implementation/CategoryRepository';
import { CreateCategoryCase } from './CreateCategoryCase';
import { CreateCategoryController } from './CreateCategoryController';

const createCategoryCase = new CreateCategoryCase(new CategoryRepository());
const createCategoryController = new CreateCategoryController(
  createCategoryCase,
  new ImgbbUploadProvider(),
);

export { createCategoryCase, createCategoryController };
