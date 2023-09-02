import express from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validations'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(AuthValidation.signup),
  AuthController.createUser
)
router.post(
  '/signin',
  validateRequest(AuthValidation.signin),
  AuthController.loginUser
)
export const AuthRoutes = router
