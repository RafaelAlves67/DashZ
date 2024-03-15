import "./Nav.css"

const Nav = () => {
  return (
    <nav>
            <div>
                <h1>Dash <span className="text-danger">Z</span></h1>
            </div>

            <ul>
                <li><a href="" className="custom-links">Login</a></li>
                <li><a href="" className="custom-links">Cadastrar</a></li>
            </ul>
        </nav>
  )
}

export default Nav