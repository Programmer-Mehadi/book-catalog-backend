import { Request, Response } from 'express'
import { ProfileService } from './profile.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import catchAsync from '../../../shared/catchAsync'

const getProfile = catchAsync(async (req: Request, res: Response) => {
  if ('user' in req) {
    const user = req.user as {
      role?: string
      userId?: string
      iat?: number
      exp?: number
    }
    const id = user.userId as string
    const result = await ProfileService.getProfile(id)
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: result ? 'Profile retrieved successfully' : 'Profile not found',
      data: result,
    })
  } else {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please login first')
  }
})

export const ProfileController = {
  getProfile,
}
