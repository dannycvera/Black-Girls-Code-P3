import React, { useState } from "react";
import "./Nav.css";
// import Header from "../Header/Header";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        {/* <Header /> */}
        {/* <div className="header">
          <NavLink className="logo" to="/">
            EventsApp
          </NavLink>
          <div>
            <input type="text"></input>
          </div>
        </div> */}
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
