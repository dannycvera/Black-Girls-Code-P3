import React from "react"
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

	getClassName() {
		const className = ["bounce", this.props.sizeClassName]

		if (this.state.isDown) {
			className.push("btnDown")
		}

		return className.join(" ")
	}

	render() {
		return (
			<button
				className={this.getClassName()}
				onMouseDown={() => this.toggleClass()}
				onMouseUp={() => this.toggleClass()}
				{...this.props}
			>
				{this.props.content}
			</button>
		)
	}
}

export default Button
