import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavHeader(props) {
  const tabs = ["Home", "About", "Blog", "Contact"];
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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

    // <nav className="navbar navbar-dark bg-dark">
    //   <a className="navbar-brand" href="#">
    //     Kyle Condie
    //   </a>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    // {tabs.map((tab) => (
    //   <li key={tab}>
    //     <a
    //       href={"#" + tab.toLowerCase()}
    //       onClick={() => props.handlePageChange(tab)}
    //       className={
    //         props.currentPage === tab ? "nav-link active" : "nav-link"
    //       }
    //           >
    //             {tab}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default NavHeader;
