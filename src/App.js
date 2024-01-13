import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { motion } from "framer-motion";
import useMediaQuery from "./Hooks/useMediaQuery";
import Navbar from "./Components/Pages/Navbar";
import Header from "./Components/Pages/Header";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Project";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer";
import DotGroup from "./Components/Pages/DotGroup";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setCurrentPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && <DotGroup currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setCurrentPage("home")}>
          <Header setCurrentPage={setCurrentPage} />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setCurrentPage("skills")}>
          <Skills />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setCurrentPage("projects")}>
          <Projects />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div margin="0 0 -200px 0" amount="all" onViewportEnter={() => setCurrentPage("contact")}>
          <Contact />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
