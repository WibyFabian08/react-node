import React, { useContext } from 'react';
import { AuthContext } from '../App';
import { Redirect } from 'react-router-dom';

const Home = () => {

    const {state, dispatch} = useContext(AuthContext);

    let token = JSON.parse(localStorage.getItem('token'));

    if(!token) {
        return <Redirect to={'/login'}></Redirect>
    }
    return (
        <div>
            Haloo {state.user}
        </div>
    )
}

export default Home;