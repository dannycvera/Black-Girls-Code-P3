import React from "react"
import "./Layout.css"
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import Search from "../Search/Search"
import Footer from "../Footer/Footer"

function Layout(props) {
	return (
		<div className="layout">
			<header>
				<Logo />
				<Search />
			</header>
			<Nav />
			<div className="layout-children">{props.children}</div>
			<div className="clear-fix"></div>
			<Footer />
		</div>
	)
}

export default Layout
