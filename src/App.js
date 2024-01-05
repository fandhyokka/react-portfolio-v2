import { useState } from "react";
import useMediaQuery from "./Hooks/useMediaQuery";
import Navbar from "././Components/Pages/Navbar";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
