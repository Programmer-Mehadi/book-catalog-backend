import prisma from '../../../shared/prisma'
import { ICategory } from './category.interface'

const createCategory = async (data: ICategory) => {
  const result = await prisma.category.create({
    data: data,
  })
  return result
}

const getAllCategory = async () => {
  const result = await prisma.category.findMany()
  return result
}
const getSingleCategory = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: {
      id: id,
    },
    include: {
      books: true,
    },
  })
  return result
}

const updateCategory = async (id: string, data: ICategory) => {
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

const deleteCategory = async (id: string) => {
  const result = await prisma.category.delete({
    where: {
      id: id,
    },
  })
  return result
}

export const CategoryService = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
}
