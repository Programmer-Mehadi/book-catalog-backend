import { Order, Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { ICategory } from './order.interface'

const createOrder = async (data: Prisma.OrderCreateInput) => {
  const result = await prisma.order.create({
    data: data,
  })
  return result
}

const getAllOrder = async () => {
  // TODO: handle for admin and customer
  const result = await prisma.order.findMany()
  return result
}
const getSingleOrder = async (id: string) => {
  // TODO: handle for admin and customer
  const result = await prisma.order.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

export const OrderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
}
