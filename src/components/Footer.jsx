import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 px-4 py-8 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto flex flex-wrap justify-between py-4">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Nuestro Negocio</h3>
          <p>Información sobre nuestra empresa.</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Servicios</h3>
          <ul className="list-none">
            <Link>
              <a href="#">Servicio 1</a>
            </Link>
            <li>
              <a href="#">Servicio 2</a>
            </li>
            <li>
              <a href="#">Servicio 3</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Redes Sociales</h3>
          <ul className="list-none">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contáctanos</h3>
          <ul className="list-none">
            <li>
              <a href="#">Correo electrónico</a>
            </li>
            <li>
              <a href="#">Teléfono</a>
            </li>
            <li>
              <a href="#">Ubicación</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-900 pt-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-auto lg:text-right text-center">
            <p>
              © 2023 Nuestro Negocio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;