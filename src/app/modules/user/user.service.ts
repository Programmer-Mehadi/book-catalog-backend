import prisma from '../../../shared/prisma'

const getAlluser = async () => {
  const result = await prisma.user.findMany()
  return result
}
const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const updateUser = async (id: string, data: any) => {
  console.log(id, data)
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
