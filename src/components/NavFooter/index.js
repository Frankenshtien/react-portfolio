import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";

function NavFooter() {
  return (
    <Navbar
      fixed="bottom"
      bg="dark"
      variant="dark"
      style={{ marginTop: "50px" }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <NavLink href="https://github.com/Frankenshtien">
          <i className="fab fa-github"></i>
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/kyle-condie-6ba8111a1/">
          <i className="fab fa-linkedin-in"></i>
        </NavLink>
        <NavLink href="https://twitter.com/kylezcondie">
          <i className="fab fa-twitter"></i>
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavFooter;
