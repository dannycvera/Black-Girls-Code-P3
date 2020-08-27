import React, { Component } from "react"
import "./Button.css"

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isDown: false,
		}
	}

	toggleClass() {
		this.setState((prevState) => ({ isDown: !prevState.isDown }))
	}

	render() {
		return (
			<button
				className={this.State.isDown ? "btnDown bounce" : "bounce"}
				onMouseDown={(e) => this.toggleClass(e)}
				onMouseUp={(e) => this.toggleClass(e)}
				{...this.props}
			/>
		)
	}
}

export default Button
