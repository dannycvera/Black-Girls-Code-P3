import React from "react"
import { NavLink } from "react-router-dom"
import "./Logo.css"
import logo from "../../../img/logo.png"

export default function Logo() {
	return (
		<div className="hot-zone-home">
			<NavLink to="/">
				<img className="logo" src={logo} alt="blackgirlscode" />
			</NavLink>
		</div>
	)
}
