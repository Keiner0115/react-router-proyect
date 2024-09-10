import { Link } from "react-router-dom"
import Logo from "../assets/react.svg"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <nav>
        <ul className="navbar__list">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
