import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";
import "./LogoMedia.css";
import logo from "../../../img/logo.png";

export default function Logo() {
  return (
    <div className="hot-zone-home">
      <NavLink to="/">
        <img className="logo" src={logo} alt="black girls code" />
      </NavLink>
    </div>
  );
}
