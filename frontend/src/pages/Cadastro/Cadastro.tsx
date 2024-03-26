import "./Cadastro.css"
import { useState } from "react"
import useUser from '../../hooks/useUser'
import { useNavigate } from "react-router-dom"
const Cadastro = () => {

  const [msg, setMsg] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // function do hook
  const {register} = useUser();

  // useNavigate
  const Navigate = useNavigate()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const msg = await register(name,email,password, confirmPassword, phone)
    setMsg(msg)

    if(msg === 'Usuário criado! Você será redirecionado para página de Login'){
      setName('')
      setEmail('')
      setPhone('')
      setPassword('') 
      setConfirmPassword('')

      setTimeout(() => {
        Navigate('/login')
      }, 3000)

    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Crie sua conta</h3>

            <label>Usuário</label>
            <input type="text" placeholder="Insira seu usuário" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>Email</label>
            <input type="email" name="" placeholder="Insira seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label>Senha</label>
            <input type="password" name="" placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <label>Confirme sua senha</label>
            <input type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

            <label>Telefone</label>
            <input type="number" placeholder="Insira seu telefone" onChange={(e) => setPhone(e.target.value)}/>

            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>

        <div className="div-erro">
            {msg === 'Usuário criado! Você será redirecionado para página de Login' && <p className="sucess">{msg}</p>}
             {msg !== 'Usuário criado!' && msg.length > 0 && <p className="error">{msg}</p>} 
        </div>
    </div>
  )
}

export default Cadastro