import logo from "../images/logo_3.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <Link to="/"><img src={logo} alt="" className="header__logo" /></Link>
    </div>
  )
}

export default Header