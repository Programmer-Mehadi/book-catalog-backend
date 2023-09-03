import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { IUSER } from '../../../interfaces/common'
import prisma from '../../../shared/prisma'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import { ILoginUser } from './auth.interface'
const signupUserDB = async (data: IUSER) => {
  try {
    const result = await prisma.user.create({
      data: {
        ...data,
      },
    })
    const { password, ...resultWithoutPassword } = result
    return resultWithoutPassword
  } catch (err: Error | any) {
    throw new ApiError(httpStatus.NOT_FOUND, err.message as string)
  }
}

const loginUserDB = async (data: ILoginUser) => {
  const { email, password } = data

  const isUserExist = await prisma.user.findUnique({
    where: {
      email: email,
      password: password,
    },
  })

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  //create access token & refresh token

  const { id: userId, role } = isUserExist
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  )

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  )

  return {
    accessToken,
    refreshToken,
  }
}

export const AuthService = {
  signupUserDB,
  loginUserDB,
}
