import "../hoja-de-estilo/navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>PC <span style={{color:"white"}}>GAMER</span></h1>
      <ul className="nav-items">
        <li>
          <Link to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/category/keyboard">Teclados</Link>
        </li>
        <li>
          <Link to="/category/mouse">Mouses</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;