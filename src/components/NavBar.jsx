import "../hoja-de-estilo/navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (      
    <nav className="navbar">
         <h1>BRAND</h1>
        <ul className="nav-items">
          <li>
            <a href="." className="active">Inicio</a>
          </li>
          <li>
            <a href=".">Productos</a>
          </li>
          <li>
            <a href=".">Contacto</a>
          </li>
        </ul> 
      <CartWidget />
    </nav>
   ); 
}  

export default Navbar;