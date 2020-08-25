import React from "react"
import "./Layout.css"
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import Search from "../Search/Search"
// import Footer from "../Footer/Footer"

function Layout(props) {
	return (
		<div className="layout">
			<header>
				<Logo />
				<Search />
			</header>
			<Nav />
			<div className="layout-children">{props.children}</div>
<<<<<<< HEAD
			{/* <Footer /> */}
=======
			<div className="clear-fix"></div>
			<Footer />
>>>>>>> cd31aa3a7c4e58f9a1c758ba53528ccce60a7ad7
		</div>
	)
}

export default Layout
