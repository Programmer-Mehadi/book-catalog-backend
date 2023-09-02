import { Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'

const getProfile = async (id: string) => {
  // TODO: handle for admin and customer
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })
  return result
}
export const ProfileService = {
  getProfile,
}
