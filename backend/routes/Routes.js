import express from 'express'
import { UserControllers } from '../controllers/UserControllers.js'
import { verifyToken } from '../helpers/verifyToken.js'
import { ProductController } from '../controllers/ProductController.js'

const Routes = express.Router()

// rotas publicas (cadastro e login de usuário)
Routes.post('/create', UserControllers.createUser)
Routes.post('/login', UserControllers.loginUser)
Routes.get('/getUser', UserControllers.getUserToken)

// Rotas protegidas (executa somente após a autenticação)
Routes.put('/edit/:id', verifyToken, UserControllers.editUser)
Routes.delete('/:id', verifyToken, UserControllers.deleteUser)
Routes.get('/', verifyToken, UserControllers.getUsers)
Routes.get('/:id', verifyToken, UserControllers.getUserByID)

// Rotas protegidas para produto
Routes.get('/products/all', verifyToken, ProductController.getProducts)
Routes.get('/product/:name', verifyToken, ProductController.getProductByName)
Routes.get('/product/get/:id', verifyToken, ProductController.getProductById)
Routes.post('/product/create', verifyToken, ProductController.addProduct)
Routes.put('/product/edit/:id', verifyToken, ProductController.editProduct)
Routes.delete('/product/delete/:id', verifyToken, ProductController.deleteProduct)
Routes.get('/products/count', verifyToken, ProductController.groupProduct)


export default Routes