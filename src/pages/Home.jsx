import React, { useContext } from 'react';
import { AuthContext } from '../App';

const Home = () => {

    const {state, dispatch} = useContext(AuthContext);

    return (
        <div>
            Haloo {state.user}
        </div>
    )
}

export default Home;