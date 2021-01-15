import React, {useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../App';

const Transaksi = () => {

  const {state, dispatch} = useContext(AuthContext);

    if(!state.isAuth) {
        return <Redirect to={'/login'}></Redirect>
    }

  return (
    <div>
      <Jumbotron>
        <h1>Halaman Transaksi!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Transaksi;
