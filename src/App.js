import { useEffect, useState } from "react";
import useMediaQuery from "./Hooks/useMediaQuery";
import Navbar from "././Components/Pages/Navbar";
import Header from "././Components/Pages/Header";
import DotGroup from "./Components/Pages/DotGroup";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app ">
      <Navbar isTopOfPage={isTopOfPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="w-5/6 mx-auto md:h-full">{<DotGroup currentPage={currentPage} setCurrentPage={setCurrentPage} />}</div>
      <Header setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
