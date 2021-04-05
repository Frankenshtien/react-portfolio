import React, { useState } from "react";
//import PortfolioPage from "./components/PortfolioPage";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, handlePageChange] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  return (
    <main>
      <NavHeader
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage(currentPage)}
      <NavFooter></NavFooter>
    </main>
  );
}

export default App;
