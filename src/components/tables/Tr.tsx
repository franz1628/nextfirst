import React from 'react';

interface TrProps {
  children: React.ReactNode;
  className?: string; // Para personalizar las clases
}

const Tr: React.FC<TrProps> = ({ children, className }) => {
  return <tr className={`hover:bg-gray-50 ${className}`}>{children}</tr>;
};

export default Tr;
