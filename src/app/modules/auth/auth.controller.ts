import { Request, Response } from 'express'
import { RequestHandler } from 'express-serve-static-core'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AuthService } from './auth.service'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AuthService.signupUserDB(req.body)
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Users created successfully',
      data: result,
    })
  }
)

export const AuthController = {
  createUser,
}
