import { useState } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import Logo from "../../Components/Logo/Logo";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CustomButton from "../Reusable/Button";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdDownload } from "react-icons/md";

const Link = ({ page, currentPage, setCurrentPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${currentPage === lowerCasePage ? "text-white" : ""} hover:bg-gradient-to-r from-green-500 to-blue-500 hover:text-white transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setCurrentPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, currentPage, setCurrentPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gradient-to-r from-green-500 to-blue-500";

  const handleResume = () => {
    const isResume = true;
    const lowerCasePage = "resume";
    if (isResume) {
      const resumeUrl = `${process.env.PUBLIC_URL}/Assets/Resume/resume.pdf`;
      window.open(resumeUrl, "_blank");
    } else {
      setCurrentPage(lowerCasePage);
    }
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed py-3`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink href="#about" onClick={() => setCurrentPage("about")}>
          <Logo />
        </AnchorLink>

        {isDesktop ? (
          <div className="flex justify-between items-center gap-5 font-opensans text-sm text-white font-semibold">
            <Link page="About" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Link page="Skills" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Link page="Projects" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Link page="Contact" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <CustomButton onClick={handleResume}>
              <div className="flex items-center h-10 w-25">
                <MdDownload className="text-white ms-1" size={22} />
                <div className=" mr-2 text-white">Resume</div>
              </div>
            </CustomButton>
          </div>
        ) : (
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white font-bold shadow-md rounded-full">
            <FaBars className="text-white" size={24} onClick={() => setIsMenuToggled(!isMenuToggled)} />
          </div>
        )}

        {/* Mobile Navigation */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[250px]">
            {/* CLOSE ICON */}
            <div className="w-10 h-10 ms-[68%] mt-3 flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white font-bold shadow-md rounded-full">
              <div className="flex justify-end items-center">
                <IoMdClose className="text-white" size={28} onClick={() => setIsMenuToggled(!isMenuToggled)} />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-5 mt-[25%] ml-[33%] text-2xl text-white">
              <Link page="About" currentPage={currentPage} setCurrentPage={setCurrentPage} />
              <Link page="Skills" currentPage={currentPage} setCurrentPage={setCurrentPage} />
              <Link page="Projects" currentPage={currentPage} setCurrentPage={setCurrentPage} />
              <Link page="Contact" currentPage={currentPage} setCurrentPage={setCurrentPage} />
              <CustomButton onClick={handleResume}>
                <div className="flex items-center h-10 w-25">
                  <MdDownload className="text-white ms-4" size={24} />
                  <div className=" mr-2 text-white">Resume</div>
                </div>
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
