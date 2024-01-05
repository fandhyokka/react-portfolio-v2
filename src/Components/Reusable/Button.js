import React from "react";

const CustomButton = ({ children, onClick }) => {
  return (
    <button type="button" className="flex w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white  font-bold shadow-md rounded-full  " onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
