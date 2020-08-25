import React from "react"
import att from "../../../img/att-logo.png"
import google from "../../../img/google-logo.png"
import oracle from "../../../img/oracle-logo.png"
import verizon from "../../../img/verizon-logo.png"
import capitalOne from "../../../img/capital-one.png"
import leftImage from "../../../img/wymg-l.png"
import rightImage from "../../../img/wymg-r.png"
import "./Contributors.css"

function Contributors() {
  return (
    <div className="contributor-container">
      <h1 className="some-contributors">Some of Our Contributors</h1>

      <div className="logos">
        <img className="google-logo" src={google} />
        <img className="oracle-logo" src={oracle} />
        <img className="att-logo" src={att} />
        <img className="capital-one-logo" src={capitalOne} />
        <img className="verizon-logo" src={verizon} />
      </div>
      <div className="bottom-imgs">
        <img src={leftImage} />
        <img src={rightImage} />
      </div>
      <h2 className="girl-quotes">
        "The Hackathon was so much <span>FUN!</span>"
      </h2>
      <h2 className="girl-quotes">
        "I <span>CAN'T WAIT</span> to do this again next year!"
      </h2>
      <button className="donate-btn">DONATE</button>
    </div>
  )
}

export default Contributors
