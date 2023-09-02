import { Request, Response } from 'express'
import { ProfileService } from './profile.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const getProfile = async (req: Request, res: Response) => {
  const result = await ProfileService.getProfile('1')
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrieved successfully',
    data: result,
  })
}

export const ProfileController = {
  getProfile,
}
