// /components/tables/TableComponent.tsx
import React, { ReactNode } from 'react';

interface TbodyProps {
  children: ReactNode;
}

const Tbody: React.FC<TbodyProps> = ({ children }) => {
  return (
      <tbody className="bg-white divide-y divide-gray-200">
        {children}
      </tbody>

  );
};

export default Tbody;
