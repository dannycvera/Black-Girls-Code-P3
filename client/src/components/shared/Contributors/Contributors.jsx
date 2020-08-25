import React from "react"
import "./Contributors.css"
import att from "../../../img/att-logo.png"
import google from "../../../img/google-logo.png"
import oracle from "../../../img/oracle-logo.png"
import verizon from "../../../img/verizon-logo.png"
import capitalOne from "../../../img/capital-one.png"

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

			<h2>
				"The Hackathon was so much <span>FUN!</span>"
			</h2>
			<h2>
				"I <span>CAN'T WAIT</span> to do this again next year!"
			</h2>
			<div>
				<img />
				<img />
			</div>
			<button className="donate-btn">DONATE</button>
		</div>
	)
}

export default Contributors
