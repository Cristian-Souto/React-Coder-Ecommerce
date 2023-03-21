import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="ml-2 flex items-center">
              <Link to="/" className="px-3 py-2 rounded-md text-lg font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                Home
              </Link>
              <Link to="/category/keyboard"
                className="ml-4 px-3 py-2 rounded-md text-lg font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                Teclados
              </Link>
              <Link to="/category/mouse"
                className="ml-4 px-3 py-2 rounded-md text-lg font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                Mouses
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            {/*Button menu hamburguesa*/}
            <button
              type="button"
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <CartWidget />
        </div>
      </div>
      {/*view menu mobile*/}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
            Home
          </Link>
          <Link to="/category/keyboard" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
            Teclados
          </Link>
          <Link to="/category/mouse" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
            Mouses
          </Link>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;