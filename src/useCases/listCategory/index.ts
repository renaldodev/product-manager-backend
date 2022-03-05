import { CategoryRepository } from '../../repository/implementation/CategoryRepository';
import { ListCategoryCase } from './ListCategoryCase';
import { ListCategoryController } from './ListCategoryController';

const listCategoryCase = new ListCategoryCase(new CategoryRepository());
const listCategoryController = new ListCategoryController(listCategoryCase);

export { listCategoryCase, listCategoryController };
