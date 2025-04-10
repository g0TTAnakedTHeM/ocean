import React from 'react';

const Divider = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="relative w-40 h-[2px]">
        <div className="absolute inset-0 bg-ocean-300/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ocean-700 to-transparent"></div>
      </div>
      <div className="mx-6 flex flex-col items-center">
        <div className="w-4 h-4 rotate-45 bg-ocean-300/30 animate-pulse"></div>
        <div className="w-4 h-4 rotate-45 bg-ocean-700 -mt-[9px] animate-pulse duration-1000"></div>
        <div className="w-4 h-4 rotate-45 bg-ocean-300/30 -mt-[9px] animate-pulse"></div>
      </div>
      <div className="relative w-40 h-[2px]">
        <div className="absolute inset-0 bg-ocean-300/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ocean-700 to-transparent"></div>
      </div>
    </div>
  );
};

export default Divider; 