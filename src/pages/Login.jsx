import React, { useContext, useState } from "react";
import { Col, Row, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../App";

const qs = require("querystring");

const api = "http://localhost:3001";

const Login = () => {
  const {dispatch} = useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
    isSubmit: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setData({
      ...data,
      isSubmit: true,
      errorMessage: null,
    });

    const requestBody = {
      email: data.email,
      password: data.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(api + "/auth/login", qs.stringify(requestBody), config)
      .then((res) => {
        if (res.data.success === true) {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
        } else {
          setData({
            ...data,
            isSubmit: false,
            errorMessage: res.data.Message,
          });
        }

        throw res;
      });
  };

  return (
    <div className="mt-4">
      <Row>
        <Col>
          <Image src="assets/login.svg" width="600px"></Image>
        </Col>
        <Col className="text-left" style={{ borderRadius: "10px" }}>
          <div
            className="form-login mt-3 shadow p-4"
            style={{ borderRadius: "10px" }}
          >
            <h2>Form Login</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={data.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  value={data.password}
                />
              </Form.Group>

              {
                data.errorMessage && (
                  <div className='alert alert-danger' role='alert'>
                    {data.errorMessage}
                  </div>
                )
              }

              <Button variant="primary" type="submit" className="mt-2" block disable={data.isSbumit}>
                {data.isSubmit ? 'Loading' : 'Login'}
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Belum Punya Akun? <Link to="/register">Register</Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
