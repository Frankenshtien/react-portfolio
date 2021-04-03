import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavHeader(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Kyle Condie</Navbar.Brand>
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
