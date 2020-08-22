import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          <NavLink className="link" to="/">
            HOME
          </NavLink>
          <div className="drop-down-list">
            <NavLink className="link" to="/">
              ABOUT BGC
            </NavLink>
            <ul className="drop-down">
              <li>
                <NavLink to="/">What We Do</NavLink>
              </li>

              <li>
                <NavLink to="/whereyourmoneygoes">
                  Where Your Money Goes
                </NavLink>
              </li>
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
