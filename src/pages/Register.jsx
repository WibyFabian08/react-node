import React from "react";
import { Col, Row, Image, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register mt-3">
      <Row>
        <Col>
          <Image src="assets/register.svg" width="600px"></Image>
        </Col>
        <Col className="text-left shadow" style={{ borderRadius: "10px" }}>
          <h2>Register</h2>
          <div className="form-register mt-3">
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-2" block>
                Daftar
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Sudah Punya Akun? <Link to="/">Login</Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
