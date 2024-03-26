import "./Home.css"
import { useContext } from "react"
import { Context } from "../context/Context"
import { Link } from "react-router-dom"

const Main = () => {

  const {name, authenticate} = useContext(Context)

  return (
    <div>
      {authenticate ? 
      <>
        <h1>Olá {name}!</h1>
        <p className="bem-vindo">Bem vindo ao nosso sistema de controle de estoque!</p>
      </> 
      
      :
       
      <>
        <h1>Faça login para poder acessar o software</h1>
        <Link to="/login">Ir para o login</Link>
        <Link to="/cadastro">Criar conta</Link>
      </>}
     
    </div>
      
  )
}

export default Main