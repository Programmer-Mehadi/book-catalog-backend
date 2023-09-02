import { Request, Response } from 'express'
import { UserService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const getAllUser = async (req: Request, res: Response) => {
  const result = await UserService.getAlluser()
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
}

const getSingleUser = async (req: Request, res: Response) => {
  const result = await UserService.getSingleUser(req.params.id)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  })
}

const updateUser = async (req: Request, res: Response) => {
  const result = await UserService.updateUser(req.params.id, req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  })
}

const deleteUser = async (req: Request, res: Response) => {
  const result = await UserService.deleteUser(req.params.id)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  })
}
export const UserController = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
