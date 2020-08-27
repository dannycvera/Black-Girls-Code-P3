import React, { useState } from "react";
import "./Nav.css";
import "./NavMedia.css";
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
                <NavLink to="/whatwedo">What We Do</NavLink>
              </li>
              <li>
                <NavLink to="/whereyourmoneygoes">
                  Where Your Money Goes
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="drop-down-list">
            <NavLink className="link" to="/">
              PROGRAM/EVENTS
            </NavLink>
            <ul className="drop-down">
              <li>
                <NavLink to="/">BCG Hackathons</NavLink>
              </li>
            </ul>
          </div>
          <div className="drop-down-list">
            <NavLink className="link" to="/">
              PRESS
            </NavLink>
            <ul className="drop-down">
              <li>
                <NavLink to="/">Press Only</NavLink>
              </li>
            </ul>
          </div>
          <div className="drop-down-list">
            <NavLink className="link" to="/">
              JOIN US
            </NavLink>
            <ul className="drop-down">
              <li>
                <NavLink to="/">Career Openings</NavLink>
              </li>
              <li>
                <NavLink to="/">Volunteer Signup</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="link" to="/">
            PARENTS
          </NavLink>
          <div className="drop-down-list">
            <NavLink className="link" to="/">
              CONTACT US
            </NavLink>
            <ul className="drop-down">
              <li>
                <NavLink to="/">Mailing List</NavLink>
              </li>
              <li>
                <NavLink to="/">Donations</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
