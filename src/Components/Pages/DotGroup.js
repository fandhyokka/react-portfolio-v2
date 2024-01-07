import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ currentPage, setCurrentPage }) => {
  const additionalStyles = `
  relative bg-gradient-to-r from-green-500 to-blue-500 
  before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-gradient-to-r from-green-500 to-blue-500
  before:left-[-50%] before:top-[-50%]
`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-9">
      <AnchorLink href="#home" className={`${currentPage === "home" ? additionalStyles : "bg-dark-grey"} w-3 h-3 rounded-full`} onClick={() => setCurrentPage("home")} />

      <AnchorLink href="#skills" className={`${currentPage === "skills" ? additionalStyles : "bg-white"} w-3 h-3 rounded-full`} onClick={() => setCurrentPage("skills")} />

      <AnchorLink href="#projects" className={`${currentPage === "projects" ? additionalStyles : "bg-white"} w-3 h-3 rounded-full`} onClick={() => setCurrentPage("projects")} />

      <AnchorLink href="#contacts" className={`${currentPage === "contacts" ? additionalStyles : "bg-white"} w-3 h-3 rounded-full`} onClick={() => setCurrentPage("contacts")} />
    </div>
  );
};

export default DotGroup;
