import React, { Component } from "react";
import "./estilo.css";
import Logo from "../../assets/img/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" />
    </nav>
  );
}

export default Navbar;
