import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
import useUser from '../../hooks/useUser'

import { useContext } from "react"
import { Context } from "../../context/Context"


const Login = () => {

    // hooks useState
    const [msg, setMsg] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // chamando função de login do hook
    const {authLogin} = useUser()

    // context
    const {login, setName} = useContext(Context)

    // hook do react router dom
    const Navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = await authLogin(email, password);
        setMsg(data.msg)

        if(data.msg === 'Bem-vindo!'){
            setName(data.user.name)
            setEmail('')
            setPassword('')
            login()
            setTimeout(() => {
                Navigate('/')
            },2000)
        }
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <h3>Faça login</h3>

            <label>Email</label>
            <input type="email" name="" placeholder="Insira seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label>Senha</label>
            <input type="password" name="" placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit" className="btn btn-primary">Entrar</button>

            <Link to="/cadastro" className="link-register">Não tem conta? Crie a sua</Link>
        </form>

        <div className="div-erro">
            {msg === 'Bem-vindo!' && <p className="sucess">{msg}</p>}
             {msg !== 'Bem-vindo!' && msg.length > 0 && <p className="error">{msg}</p>} 
        </div>
    </div>
  )
}

export default Login