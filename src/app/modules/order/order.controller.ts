import { Request, Response } from 'express'
import { OrderService } from './order.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import { ENUM_USER_ROLE } from '../../../enums/user'

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  })
})

const getAllOrder = async (req: Request, res: Response) => {
  console.log(req.user)
  if ('user' in req) {
    console.log('user', req.user)
    const user = req.user as {
      role?: string
      userId?: string
      iat?: number
      exp?: number
    }
    console.log('rr')
    if (user.role === 'customer') {
      const result = await OrderService.getAllOrder()
      sendResponse<object>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
      })
    }
  } else {
    const result = await OrderService.getAllOrder()
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Orders retrieved successfully',
      data: result,
    })
  }
}

const getSingleOrder = async (req: Request, res: Response) => {
  const result = await OrderService.getSingleOrder(req.params.orderId)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully',
    data: result,
  })
}

export const OrderController = {
  createOrder,
  getAllOrder,
  getSingleOrder,
}
