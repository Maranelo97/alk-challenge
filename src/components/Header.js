import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Searcher from "./Searcher";

function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img
                src="data:image/png;base64,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"
                alt=""
                width="30"
                height="24"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#">Alkemy Challenge</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/list">
                  List
                </Nav.Link>
                <Nav.Link as={Link} to="/list">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="text-white">
              <Searcher />
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
