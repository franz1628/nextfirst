// components/loading/Loader.tsx

const Loader = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="border-t-4 border-white border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default Loader;
  