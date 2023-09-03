import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import prisma from '../../../shared/prisma'

const getAlluser = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      createdAt: true,
      updatedAt: true,
    },
  })
  return result
}
const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      createdAt: true,
      updatedAt: true,
    },
  })
  return result
}

const updateUser = async (id: string, data: any) => {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id: id,
    },
  })
  return result
}

export const UserService = {
  getAlluser,
  getSingleUser,
  updateUser,
  deleteUser,
}
