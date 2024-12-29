'use client'

import apiClient from '@/services/apiClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      await apiClient.post('/auth/logout');
      router.push('/auth/login');
    } catch (err) {
      console.error('Error al cerrar sesión', err);
    }
  };

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

          <li className="ml-auto">
            <button
              onClick={handleLogout}
              className="text-white text-lg hover:text-blue-400 transition duration-300">
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;