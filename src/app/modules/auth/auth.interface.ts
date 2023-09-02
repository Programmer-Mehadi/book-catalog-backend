export type ILoginUserResponse = {
  statusCode: number
  success: boolean
  message: string
  token?: string
}

export type ILoginUser = {
  email: string
  password: string
}
