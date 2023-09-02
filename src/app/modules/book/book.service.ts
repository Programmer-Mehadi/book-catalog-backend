import { Book } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { IBook } from './book.interface'

const createBook = async (data: Book) => {
  const result = await prisma.book.create({
    data: data,
  })
  return result
}

const getAllBook = async () => {
  const result = await prisma.book.findMany()
  return result
}
const getSingleBook = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const getBookByCategory = async (id: string) => {
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
  })
  return result
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
