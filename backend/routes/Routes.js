import express from 'express'
import { UserControllers } from '../controllers/UserControllers.js'
import { verifyToken } from '../helpers/verifyToken.js'

const Routes = express.Router()

// rotas publicas (cadastro e login de usuário)
Routes.post('/create', UserControllers.createUser)
Routes.post('/login', UserControllers.loginUser)

// Rotas protegidas (executa somente após a autenticação)
Routes.put('/edit/:id', verifyToken, UserControllers.editUser)
Routes.delete('/:id', verifyToken, UserControllers.deleteUser)
Routes.get('/', verifyToken, UserControllers.getUsers)
Routes.get('/:id', verifyToken, UserControllers.getUserByID)


export default Routes