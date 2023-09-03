import { Request, Response } from 'express'
import { OrderService } from './order.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import ApiError from '../../../errors/ApiError'

const createOrder = catchAsync(async (req: Request, res: Response) => {
  if ('user' in req) {
    const result = await OrderService.createOrder(req.body, req.user)
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order created successfully',
      data: result,
    })
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Please login first')
  }
})

const getAllOrder = async (req: Request, res: Response) => {
  if ('user' in req) {
    const user = req.user as {
      role?: string
      userId?: string
      iat?: number
      exp?: number
    }

    if (user.role === 'customer') {
      const result = await OrderService.getAllOrder(
        user.role,
        user.userId as string
      )
      sendResponse<object>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
      })
    } else {
      const result = await OrderService.getAllOrder(
        user.role as string,
        user.userId as string
      )
      sendResponse<object>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
      })
    }
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Please login first')
  }
}

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  if ('user' in req) {
    const user = req.user as {
      role?: string
      userId?: string
      iat?: number
      exp?: number
    }
    const orderId = req.params.orderId as string
    if (user.role === 'customer') {
      const result = await OrderService.getSingleOrder(
        user.role,
        user.userId as string,
        orderId
      )
      if (result) {
        sendResponse<object>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Orders retrieved successfully',
          data: result,
        })
      } else {
        sendResponse<object>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Orders Not Found',
          data: result,
        })
      }
    } else {
      const result = await OrderService.getSingleOrder(
        user.role as string,
        user.userId as string,
        orderId
      )
      if (result) {
        sendResponse<object>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Orders retrieved successfully',
          data: result,
        })
      } else {
        sendResponse<object>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Orders Data Not Found',
          data: result,
        })
      }
    }
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Please login first')
  }
})

export const OrderController = {
  createOrder,
  getAllOrder,
  getSingleOrder,
}
