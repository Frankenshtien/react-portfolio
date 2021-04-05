import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavHeader(props) {
  const tabs = ["AboutMe", "Portfolio", "Contact", "Resume"];
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand
        href="#aboutme"
        onClick={() => props.handlePageChange("aboutme")}
      >
        Kyle Condie
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {tabs.map((tab) => (
            <Nav.Link
              key={tab}
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
            >
              {tab}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavHeader;
