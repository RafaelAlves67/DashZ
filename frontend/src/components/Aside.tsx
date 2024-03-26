import "./Aside.css"
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { DiAptana } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { BsBrushFill } from "react-icons/bs";

// react router dom
import { Link } from "react-router-dom";

const Aside = () => {

    
  return (
      <aside>
          <ul>
              <li><Link to="/" className="custom-links"><FaHome />Home</Link></li> 
              <li><Link to="/products" className="custom-links"><BsBrushFill /> Produtos</Link></li>
              <li><Link to="/dash" className="custom-links"><MdDashboard /> DashBoard</Link></li>
              <li><Link to="/profile" className="custom-links"><IoPersonSharp /> Perfil</Link></li>
              <li><Link to="/settings" className="custom-links"><DiAptana /> Settings</Link></li>
          </ul>
          <i className="bi bi-linkedin"></i>
          <p>WebSite &copy; 2024</p>
      </aside>
  )
}

export default Aside