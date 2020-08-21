import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const [show, updShow] = useState("");

  const handleHover = () => {
    updShow("show");
  };

  const handleHoverExit = () => {
    updShow("");
  };
  return (
    <nav>
      <div className="nav">
        <div className="header">
          <NavLink className="logo" to="/">
            EventsApp
          </NavLink>
          <div>
            <input type="text"></input>
          </div>
        </div>
        <div className="links">
          <NavLink className="link" to="/">
            HOME
          </NavLink>
          <div className="drop-down-about">
            <NavLink
              className="link"
              to="/"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              ABOUT BGC
            </NavLink>
            <ul className={`drop-down ${show}`}>
              <li>What We Do</li>
              <li>Where Your Money Goes</li>
            </ul>
          </div>

          <NavLink className="link" to="/">
            PROGRAM/EVENTS
          </NavLink>
          <NavLink className="link" to="/">
            PRESS
          </NavLink>
          <NavLink className="link" to="/">
            JOIN US
          </NavLink>
          <NavLink className="link" to="/">
            PARENTS
          </NavLink>
          <NavLink className="link" to="/">
            CONTACT US
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
