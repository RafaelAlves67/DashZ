import "./Nav.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/Context"

const Nav = () => {

  const {authenticate, logout, name} = useContext(Context)

  console.log(name)



  return (
    <nav>
            <div>
                <h1>Dash <span className="text-danger">Z</span></h1>
            </div>

            <ul>
            {!authenticate && <li><Link to ="/login" className="custom-links">Login</Link></li>}
            {!authenticate &&<li><Link to="/cadastro" className="custom-links">Cadastrar</Link></li> }
            {authenticate && <li><p className="p-name">Olá {name}</p></li>}
            {authenticate && <Link to="/" className="custom-links" onClick={logout}>Sair</Link>}
            </ul>
        </nav>
  )
}

export default Nav