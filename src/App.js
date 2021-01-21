import React, { useReducer, createContext } from "react";
import "./App.css";
import NavigationBar from "../src/component/NavigationBar";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login, ListMahasiswa, Transaksi, LandingPage, Home, Register } from './pages'

// membuat Context
export const AuthContext = createContext();

// initial State
const initialState = {
  isAuth: false,
  token: null,
  user: null,
  role: 0
  // tokenExpires: 0
};

// membuat reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role
        // tokenExpires: action.payload.expires
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user: null,
      };


    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Container>
        <AuthContext.Provider value={{ state, dispatch }}>
          <Router>
            <NavigationBar></NavigationBar>
            <Switch>
              <Route exact path="/" component={LandingPage}></Route>
            </Switch>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
            </Switch>
            <Switch>
              <Route exact path="/login" component={Login}></Route>
            </Switch>
            <Route exact path="/register" component={Register}></Route>
            <Switch>
              <Route exact path="/transaksi" component={Transaksi}></Route>
            </Switch>
            <Switch>
              <Route exact path="/mahasiswa" component={ListMahasiswa}></Route>
            </Switch>
          </Router>
        </AuthContext.Provider>
      </Container>
    </div>
  );
}

export default App;
