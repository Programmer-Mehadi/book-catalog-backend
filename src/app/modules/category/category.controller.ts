import { Request, Response } from 'express'
import { CategoryService } from './category.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.createCategory(req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})

const getAllCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategory()
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: result,
  })
}

const getSingleCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.getSingleCategory(req.params.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category fetched successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category not Found',
      data: result,
    })
  }
}

const updateCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.updateCategory(req.params.id, req.body)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category Not Found',
      data: result,
    })
  }
}

const deleteCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.deleteCategory(req.params.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category not Found',
      data: result,
    })
  }
}
export const CategoryController = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
}
