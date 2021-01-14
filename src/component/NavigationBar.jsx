import React, { useContext } from "react";
import {
  Navbar,
  Button,
  FormControl,
  Form,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { AuthContext } from "../App";

const NavigationBar = () => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <strong>UWeb</strong>Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-dark">Home</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item href="#action/3.1">AutoCad</NavDropdown.Item>
              <NavDropdown.Item>Building Materials</NavDropdown.Item>
              <NavDropdown.Item>Google SketchUp</NavDropdown.Item>
              <NavDropdown.Item>Modern House</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/WibyFabian08">
                My github
              </NavDropdown.Item>
              <NavDropdown.Item>About Me</NavDropdown.Item>
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
            >
              {state.isAuth && "LOGOUT"}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
