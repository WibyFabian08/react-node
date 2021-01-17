import React, { useContext } from "react";
import { Navbar, Button, Form, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../App";
import { Link } from "react-router-dom";

const NabvarAdmin = () => {

  const { state, dispatch } = useContext(AuthContext);

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
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item as={Link} to="/transaksi">
                Transaksi
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mahasiswa">
                Mahasiswa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/WibyFabian08">
                My github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button
              variant="outline-secondary"
              onClick={() =>
                dispatch({
                  type: "LOGOUT",
                })
              }
              as={Link}
              to="/login"
            >
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NabvarAdmin;
