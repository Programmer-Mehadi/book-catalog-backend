import { Request, Response } from 'express'
import { RequestHandler } from 'express-serve-static-core'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AuthService } from './auth.service'
import config from '../../../config'

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
const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...loginData } = req.body
    const result = await AuthService.loginUserDB(loginData)
    const { refreshToken, accessToken } = result

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    }

    res.cookie('refreshToken', refreshToken, cookieOptions)

    res.send({
      statusCode: 200,
      success: true,
      message: 'User logged in successfully',
      token: accessToken,
    })
  }
)

export const AuthController = {
  createUser,
  loginUser,
}
