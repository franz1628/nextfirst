// components/loading/Loader.tsx

const Loader = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <span className="mt-4 text-blue-500 text-lg">Cargando...</span>
    </div>
    );
  };
  
  export default Loader;
  