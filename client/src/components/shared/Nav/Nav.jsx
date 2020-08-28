import React, { useState } from "react";
import "./Nav.css";
import "./NavMedia.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const [visible, updVisible] = useState("");
  const [cross, updCross] = useState("");
  return (
    <>
      <div
        className={`nav-icon ${cross}`}
        onClick={() => {
          if (visible === "show") {
            updVisible("");
            updCross("");
          } else {
            updVisible("show");
            updCross("cross");
          }
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <div className="nav">
          <div className={`links ${visible}`}>
            <NavLink className="link" to="/">
              HOME
            </NavLink>
            <div className="drop-down-list">
              <div className="link">ABOUT BGC</div>

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
              <div className="link">PROGRAM/EVENTS</div>
              <ul className="drop-down">
                <li>
                  <NavLink to="/">BCG Hackathons</NavLink>
                </li>
              </ul>
            </div>
            <div className="drop-down-list">
              <div className="link">PRESS</div>
              <ul className="drop-down">
                <li>
                  <NavLink to="/">Press Only</NavLink>
                </li>
              </ul>
            </div>
            <div className="drop-down-list">
              <div className="link">JOIN US</div>
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
              <div className="link">CONTACT US</div>
              <ul className="drop-down">
                <li>
                  <NavLink to="/">Mailing List</NavLink>
                </li>
                <li>
                  <NavLink to="/donations">Donations</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
