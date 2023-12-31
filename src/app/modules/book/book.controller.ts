import { Request, Response } from 'express'
import { BookService } from './book.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import { bookFilterableFields } from './book.constants'

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])

  const result = await BookService.getAllBook(filters, options)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    data: result,
  })
})

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBook(req.params.id)

  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book fetched successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book Not Found',
      data: result,
    })
  }
})

const getBookByCategory = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
  const result = await BookService.getBookByCategory(
    req.params.categoryId,
    filters,
    options
  )

  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched successfully',
    data: result,
  })
})

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.updateBook(req.params.id, req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  })
})

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id)

  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  })
})

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBookByCategory,
}
