import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Transaksi = () => {

  let token = JSON.parse(localStorage.getItem('token'));

  if (!token) {
    return <Redirect to={"/login"}></Redirect>;
  }

  return (
    <div className='mt-3'>
      <Jumbotron>
        <h1>Halaman Transaksi!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="outline-secondary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Transaksi;
