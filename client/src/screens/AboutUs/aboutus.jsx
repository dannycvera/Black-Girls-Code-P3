import React from "react";
import "./aboutus.css";
import Layout from "../../components/shared/Layout/Layout";
import Footer from "client/src/components/shared/Footer/Footer.jsx"
import Nav "from client/src/components/shared/Nav/Nav.jsx"

import React from 'react'

function aboutus() {
  return (
    <div>
      <h1>What We Do</h1>
      <div className="whatwedo-container">
        <ul>We are devoted to showing the world that girls know how to code</ul>
        <ul>We create community outreach programs and after-school programs</ul>
        <ul>We bring technology and entertainment to girls of color </ul>
        <ul>We imbue young girls with the confidence to navigate the 21st century</ul>
      </div>
    </div>

    <div>
      <h1>Our Goal</h1>
      <div className="ourgoal-container">
        <p> Our ultimate goal is to provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.</p>
      </div>
    </div>

    
  )
}

export default aboutus

