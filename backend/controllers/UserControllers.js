import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()
const secret = process.env.SECRET 


export class UserControllers{


    // FUNÇÃO PARA CRIAR USUÁRIO
    static async createUser(req,res){
        const {name, email, password, confirmPassword} = req.body 

        if(!name){
            return res.status(401).json({msg: "O campo de nome é obrigatório!"})
        }

        
        if(!email){
            return res.status(401).json({msg: "O campo de email é obrigatório!"})
        }

        
        if(!password){
            return res.status(401).json({msg: "O campo de senha é obrigatório!"})
        }

        if(!confirmPassword){
            return res.status(401).json({msg: "O campo de confirmação de senha é obrigatório!"})
        }

        if(password !== confirmPassword){
            return res.status(401).json({msg: "As senhas devem ser iguais para confirmação!"})
        }

        const userExist = await User.findOne({email: email})
        
        if(userExist){
            return res.status(401).json({msg: "Email já existente!"})
        }

        const salt = 12
        const hashPassword = await bcrypt.hash(password, salt)

        try{
            const newUser = new User({name, email, password: hashPassword})
            newUser.save()
            return res.status(200).json({msg: "Usuário criado!"})
        }catch(error){
            console.log("Erro de servidor ao criar usuario")
            return res.status(500).json("Erro de servidor interno")
        }
    }

    static async loginUser(req,res){
        const {email, password} = req.body
        
        if(!email){
            return res.status(401).json({msg: "Preencha o campo de email para fazer login!"})
        }

                
        if(!password){
            return res.status(401).json({msg: "Preencha o campo de senha para fazer login!"})
        }

        const user = await User.findOne({email: email})

        if(!user){
            return res.status(404).json({msg: "Usuário não encontrado!"})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(checkPassword){
            const token = jwt.sign({id: user.id}, secret)

            return res.status(200).json({msg: "Bem-vindo!", token})
        }else{
            return res.status(401).json({msg: "Senha incorreta!"})
        }
    }

    static async editUser(req,res){
        const {name, email, password} = req.body 
        const id = req.params.id
        const updateUser = {name, email, password}

        const user = await User.findOne({_id: id})

        if(!user){
            return res.status(404).json({msg: "Usuário não encontrado!"})
        }

        await User.updateOne({_id: id}, updateUser)

        const newUser = await User.findOne({_id: id})
        return res.status(200).json({msg: "Produto alterado", newUser})

    }

    static async deleteUser(req, res){
        const id = req.params.id 

        const userExist = await User.findById(id)

        if(!userExist){
            return res.status(404).json({msg: "Usuário não encontrado!"})
        }

        await User.deleteOne({_id: id})

        return res.status(200).json({msg: "Usuário excluído"})
    }

    static async getUsers(req, res){
        
        const users = await User.find()

        if(users.length === 0){
            return res.status(404).json({msg: "Nenhum usuário encontrado"})
        }

        return res.status(200).json(users)
    }

    static async getUserByID(req,res){

        const id = req.params.id

        const user = await User.findById(id)

        if(!user){
            return res.status(404).json({msg: "Usuário não encontrado!"})
        }

        return res.status(200).json(user)
    }
}