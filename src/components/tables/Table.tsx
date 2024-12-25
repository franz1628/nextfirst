import React, { ReactNode } from 'react';

interface TableProps {
  headers: string[]; // Los nombres de las columnas
  children: ReactNode; // Los datos a mostrar (en este caso el cuerpo de la tabla, `tbody`)
}

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default Table;
