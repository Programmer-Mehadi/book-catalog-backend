import { Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'

const getProfile = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      email: true,
      role: true,
      password: true,
      contactNo: true,
      address: true,
      profileImg: true,
      createdAt: true,
      updatedAt: true,
    },
  })
  return result
}
export const ProfileService = {
  getProfile,
}
