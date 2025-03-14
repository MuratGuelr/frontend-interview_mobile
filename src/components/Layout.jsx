import { useApp } from "../context/AppContext";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen dark bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-[100vw] overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};
