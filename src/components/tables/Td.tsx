// /components/tables/Td.tsx
import React from 'react';

interface TdProps {
  children: React.ReactNode;
  className?: string; // Para personalizar las clases
}

const Td: React.FC<TdProps> = ({ children, className }) => {
  return (
    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ${className}`}>
      {children}
    </td>
  );
};

export default Td;
