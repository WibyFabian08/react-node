import React from "react";
import { Navbar, Button, Form, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavbarPublik = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <strong>UWeb</strong>Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-dark" as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-secondary" as={Link} to="/login">
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarPublik;
