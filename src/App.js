import React, { useState } from "react";
//import PortfolioPage from "./components/PortfolioPage";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <NavHeader />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <NavFooter></NavFooter>
      </main>
    </Router>
  );
}

export default App;
