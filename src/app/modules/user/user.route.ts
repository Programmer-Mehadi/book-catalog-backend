import express from 'express'
import { UserController } from './user.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser)
router.get('/:id', UserController.getSingleUser)
router.patch('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)
export const UserRoutes = router
