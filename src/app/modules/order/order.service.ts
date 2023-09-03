import { Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { JwtPayload } from 'jsonwebtoken'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const createOrder = async (
  data: Prisma.OrderCreateInput,
  userData: JwtPayload | null | undefined
) => {
  if (userData) {
    const result = await prisma.order.create({
      data: { ...data, userId: userData.userId },
    })
    return result
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Please login first')
  }
}

const getAllOrder = async (role: string, id: string) => {
  if (role === 'customer') {
    const result = await prisma.order.findMany({
      where: {
        userId: id,
      },
    })
    return result
  } else {
    const result = await prisma.order.findMany()
    return result
  }
}
const getSingleOrder = async (
  role: string,
  userId: string,
  orderId: string
) => {
  if (role === 'customer') {
    let result = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    })
    if (!result) {
      return null
    }

    result = await prisma.order.findUnique({
      where: {
        id: orderId,
        userId: userId,
      },
    })
    if (result) {
      return result
    }
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'You are not authorized to view this order'
    )
  } else {
    const result = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    })
    return result
  }
}

export const OrderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
}
