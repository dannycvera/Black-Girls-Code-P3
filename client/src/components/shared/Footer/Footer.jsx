import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
// 	faFacebook,
// 	faTwitter,
// 	faLinkedIn,
// } from "@fortawesome/react-fontawesome"

// library.add(
// 	faFacebook,
// 	faTwitter
// 	// faLinkedIn,
// )

function Footer() {
	return (
		<div className="footer">
			<h3>Follow Us</h3>
			<div className="social-bar">
				<a href="#" className="facebook">
					<FontAwesomeIcon icon={["fab", "facebook"]} />
				</a>
				<a href="#" className="twitter">
					<FontAwesomeIcon icon={["fab", "twitter"]} />
				</a>
				<a href="#" className="linkedin">
					<FontAwesomeIcon icon={["fab", "linkedin"]} />
				</a>
			</div>
		</div>
	)
}

export default Footer
