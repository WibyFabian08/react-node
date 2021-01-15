import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="body text-left">
      <Row>
        <Col className="mt-5">
          <p className="display-1">
            <strong>We Create We Built</strong>
          </p>
          <p className="text-secondary mt-2 text-justify">
            We are here to serve you from online shopping to give you
            inspiration in making your dream home. We are ready to serve you in
            the midst of this pandemic by providing easy and fast service, you
            just have to sit at home and we are ready to serve your needs.
          </p>
          <Button variant="outline-secondary mt-2">
            Get Started
          </Button>
        </Col>
        <Col className="mt-5">
          <Image src="assets/cart.png" width="600"></Image>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
