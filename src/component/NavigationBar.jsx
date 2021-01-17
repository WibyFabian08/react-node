import React, { useContext } from "react";
import { AuthContext } from "../App";
import NavbarAdmin from './navbarRole/NavbarAdmin';
import NavbarMember from './navbarRole/NavbarMember';
import NavbarStaff from './navbarRole/NavbarStaff';
import NavbarAll from './navbarRole/NavbarAll';

const NavigationBar = () => {
  const { state } = useContext(AuthContext);

  let token = JSON.parse(localStorage.getItem('token'));

  if (!token) {
    return (
      <div>
        <NavbarAll></NavbarAll>
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
