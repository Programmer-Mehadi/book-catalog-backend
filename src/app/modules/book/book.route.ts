import express from 'express'
import { BookController } from './book.controller'
import validateRequest from '../../middlewares/validateRequest'
import { BookValidation } from './book.validation'

const router = express.Router()

router.post(
  '/create-book',
  validateRequest(BookValidation.create),
  BookController.createBook
)
router.get('/', BookController.getAllBook)
router.get('/:id', BookController.getSingleBook)
router.get('/:categoryId/category', BookController.getBookByCategory)
router.patch('/:id', BookController.updateBook)
router.delete('/:id', BookController.deleteBook)

export const BookRoutes = router
