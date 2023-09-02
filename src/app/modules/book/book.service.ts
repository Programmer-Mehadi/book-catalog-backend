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
  const total = await prisma.book.count({})

  return {
    meta: {
      page,
      size: limit,
      total,
      totalPage: Math.ceil(total / limit),
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
      totalPage: Math.ceil(total / limit),
    },
    data: result,
  }
}
const updateBook = async (id: string, data: IBook) => {
  try {
    const existingBook = await prisma.book.findUnique({
      where: { id: id },
    })

    if (!existingBook) {
      return
    }
    const result = await prisma.book.update({
      where: { id: id },
      data: data,
    })

    return result
  } catch (err) {
    console.error(err)
    throw err
  }
}

const deleteBook = async (id: string) => {
  try {
    const existingBook = await prisma.book.findUnique({
      where: { id: id },
    })

    if (!existingBook) {
      return existingBook
    } else {
      const result = await prisma.book.delete({
        where: { id: id },
      })

      return result
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

export const BookService = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBookByCategory,
}
