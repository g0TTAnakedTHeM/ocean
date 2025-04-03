
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-playfair font-bold text-ocean-600 mb-6">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Сторінку не знайдено</p>
        <p className="text-gray-600 mb-8">
          Сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-md bg-ocean-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-ocean-700 transition-colors duration-300"
        >
          Повернутись на головну
        </a>
      </div>
    </div>
  );
};

export default NotFound;
