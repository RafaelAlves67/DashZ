import "./Settings.css"
import { useContext} from "react"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"

const Settings = () => {

    const {authenticate} = useContext(Context)
  return (
    <div>
        {authenticate ? 
        <>
            <div className="div-settings">
                  <h3>Aqui está as configurações do Web Site: </h3>

                 
                        <p>Web site feito com BackEnd em Node Js e banco de dados MongoDB e FrontEnd com React Js e Typescript.</p>

                        <strong>Sistema para gerenciamento de produtos com diversas funcionalidades como:</strong>

                        <ul className="ul-settings">
                            <li>- Cadastro de usuário / Login para autenticação de usuário </li>
                            <li>- Hook personalizado</li>
                            <li>- Context API</li>
                            <li>- API construída em Node Js com integração ao MongoDB</li>
                            <li>- Cadastro, edição, remoção, leitura e busca de produtos</li>
                            <li>- Navegação por Rotas</li>
                            <li>- DashBoard dos produtos</li>
                        </ul> 
                  
            </div>
        </> 
        : 
        <>
            <h1>Acesso negado!</h1>

            <Link to="/login">Faça login</Link>
            <Link to="/cadastro">Crie sua conta</Link>
        </>}
    </div>
  )
}

export default Settings