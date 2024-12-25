import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 p-4">
        <nav>
          <ul className="flex space-x-6 justify-center items-center md:space-x-8 md:flex-row flex-col">
            <li>
              <Link href="/" className="text-white text-lg hover:text-blue-400 transition duration-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/dashboard/provincia" className="text-white text-lg hover:text-blue-400 transition duration-300">
                Provincia
              </Link>
            </li>
            <li>
              <Link href="/dashboard/departamento" className="text-white text-lg hover:text-blue-400 transition duration-300">
                Departamento
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      
      
      
      
      
    );
};

export default Header;