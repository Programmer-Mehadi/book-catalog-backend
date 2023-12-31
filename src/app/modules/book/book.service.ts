import { Book, Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { IBook, IBookFilterRequest } from './book.interface'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import {
  bookRelationalFields,
  bookRelationalFieldsMapper,
  bookSearchableFields,
} from './book.constants'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const createBook = async (data: Book) => {
  const result = await prisma.book.create({
    data: data,
  })
  return result
}

const getAllBook = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
) => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options)
  const { search, ...filterData } = filters

  const andConditions = []

  if (search) {
    andConditions.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    })
  }
  //

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (bookRelationalFields.includes(key)) {
          if (key === 'minPrice') {
            return {
              [bookRelationalFieldsMapper[key]]: {
                gte: Number((filterData as any)[key]),
              },
            }
          }
          if (key === 'maxPrice') {
            return {
              [bookRelationalFieldsMapper[key]]: {
                lte: Number((filterData as any)[key]),
              },
            }
          } else {
            return {
              [bookRelationalFieldsMapper[key]]: (filterData as any)[key],
            }
          }
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          }
        }
      }),
    })
  }
  //

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {}

  let result
  try {
    result = await prisma.book.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy:
        options.sortBy && options.sortOrder
          ? { [options.sortBy]: options.sortOrder }
          : {
              createdAt: 'desc',
            },
    })
  } catch (err) {
    console.log(err)
  }
  const total = await prisma.book.count({
    where: whereConditions,
  })

  return {
    meta: {
      page,
      size: limit,
      total,
      totalPage: total > 0 ? Math.ceil(total / limit) : 1,
    },
    data: result,
  }
}
const getSingleBook = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const getBookByCategory = async (
  id: string,
  filters: IBookFilterRequest,
  options: IPaginationOptions
) => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options)

  let result
  try {
    result = await prisma.book.findMany({
      where: {
        categoryId: id,
      },
      skip,
      take: limit,
    })
  } catch (err) {
    console.log(err)
  }
  const total = await prisma.book.count({
    where: {
      categoryId: id,
    },
  })

  return {
    meta: {
      page,
      size: limit,
      total,
      totalPage: total > 0 ? Math.ceil(total / limit) : 1,
    },
    data: result,
  }
}
const updateBook = async (id: string, data: IBook) => {
  const result = await prisma.book.update({
    where: { id: id },
    data: data,
  })
  return result
}

const deleteBook = async (id: string) => {
  const result = await prisma.book.delete({
    where: { id: id },
  })
  return result
}

export const BookService = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBookByCategory,
}
