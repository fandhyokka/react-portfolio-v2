// CustomButton.js

import React from "react";

const CustomButton = ({ children, onClick, width, height }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center h-full w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white font-bold shadow-md rounded-full"
      onClick={onClick}
      style={{ width, height }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
