import { IGenericErrorMessage } from './error'

export type IUSER = {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'customer'
  contactNo: string
  address: string
  profileImg: string
  createdAt: Date
  updatedAt: Date
}

export type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}
