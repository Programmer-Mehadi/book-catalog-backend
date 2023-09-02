import express from 'express'
import { BookController } from './book.controller'
import validateRequest from '../../middlewares/validateRequest'
import { BookValidation } from './book.validation'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.createBook
)
router.get('/', BookController.getAllBook)
router.get('/:id', BookController.getSingleBook)
router.get('/:categoryId/category', BookController.getBookByCategory)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.updateBook)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook)

export const BookRoutes = router
