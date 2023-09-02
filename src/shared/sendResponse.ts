import { Response } from 'express'

type IApiReponse<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    count: number | undefined
  }
  data?: T | null | undefined
}
type IApiLoginReponse<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  token?: T | null | undefined
}

const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
  const responseData: IApiReponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null,
  }

  res.status(data.statusCode).json(responseData)
}
export const sendLoginResponse = <T>(
  res: Response,
  data: IApiLoginReponse<T>
): void => {
  const responseData: IApiLoginReponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    token: data.token || null,
  }

  res.status(data.statusCode).json(responseData)
}

export default sendResponse
