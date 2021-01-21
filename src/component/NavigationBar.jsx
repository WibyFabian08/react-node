import React, { useContext } from "react";
import { AuthContext } from "../App";
import { NavbarAdmin, NavbarMember, NavbarStaff, NavbarPublik } from './navbarRole';

const NavigationBar = () => {
  const { state } = useContext(AuthContext);

  let token = JSON.parse(localStorage.getItem('token'));

  if (!token) {
    return (
      <div>
        <NavbarPublik></NavbarPublik>
      </div>
    );
  } else {
    if(state.role == 1) {
      return (
        <NavbarStaff></NavbarStaff>
      )
    } else if(state.role == 2) {
        return (
          <NavbarAdmin></NavbarAdmin>
        )
    } else if(state.role == 3) {
      return (
        <NavbarMember></NavbarMember>
      )
    }
  }
};

export default NavigationBar;