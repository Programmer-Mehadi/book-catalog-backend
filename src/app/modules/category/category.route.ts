import express from 'express'
import { CategoryController } from './category.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import validateRequest from '../../middlewares/validateRequest'
import { CategoryValidation } from './category.validation'

const router = express.Router()

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.create),
  CategoryController.createCategory
)
router.get('/', CategoryController.getAllCategory)
router.get('/:id', CategoryController.getSingleCategory)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.update),
  CategoryController.updateCategory
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory
)

export const CategoryRoutes = router
