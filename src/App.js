import React, { useReducer, createContext } from "react";
import "./App.css";
import NavigationBar from "../src/component/NavigationBar";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Home from "./pages/Home";

// membuat Context
export const AuthContext = createContext();

// initial State
const initialState = {
  isAuth: false,
  token: null,
  user: null,
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
    <div className="App">
      <Container>
        <AuthContext.Provider value={{ state, dispatch }}>
          <NavigationBar></NavigationBar>
          <Router>
            <Switch>
              {!state.isAuth ? (
                <Redirect to={{ pathname: "/" }} />
              ) : (
                <Redirect to={{ pathname: "/home" }} />
              )}
            </Switch>
            <Switch>
              <Route exact path="/" component={Login}></Route>
            </Switch>
              <Route exact path="/register" component={Register}></Route>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
            </Switch>
          </Router>
        </AuthContext.Provider>
      </Container>
    </div>
  );
}

export default App;
