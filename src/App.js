import React from "react";
//import PortfolioPage from "./components/PortfolioPage";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <NavHeader></NavHeader>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <NavFooter></NavFooter>
      <Contact></Contact>
      <Resume></Resume>
    </main>
  );
}

export default App;
