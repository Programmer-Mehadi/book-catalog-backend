import { Request, Response } from 'express'
import { BookService } from './book.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})

const getAllBook = async (req: Request, res: Response) => {
  const result = await BookService.getAllBook()
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: result,
  })
}

const getSingleBook = async (req: Request, res: Response) => {
  const result = await BookService.getSingleBook(req.params.id)
  if (!result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book not Found',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book fetched successfully',
      data: result,
    })
  }
}

const getBookByCategory = async (req: Request, res: Response) => {
  const result = await BookService.getBookByCategory(req.params.categoryId)
  if (!result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book not Found',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book fetched successfully',
      data: result,
    })
  }
}

const updateBook = async (req: Request, res: Response) => {
  const result = await BookService.updateBook(req.params.id, req.body)
  if (!result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book not Found',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book updated successfully',
      data: result,
    })
  }
}

const deleteBook = async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id)
  if (!result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book not Found',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book deleted successfully',
      data: result,
    })
  }
}
export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBookByCategory,
}
