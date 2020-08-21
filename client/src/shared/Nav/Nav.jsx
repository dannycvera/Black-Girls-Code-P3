import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
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
          <div className="drop-down">
            <NavLink className="link" to="/">
              HOME
            </NavLink>
            <NavLink className="link" to="/">
              ABOUT BGC
            </NavLink>
            {/* <ul>
              <li>What We Do</li>
              <li>Where Your Money Goes</li>
            </ul> */}

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
      </div>
    </nav>
  );
}

export default Nav;
