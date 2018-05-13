import React from "react";

export class Checkbox extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: false };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		console.log(this.state.value);
		this.setState({ value: this.state.value ? false : true });
	}

	render() {
		return (

			<label>
				<input type="checkbox" onClick={this.handleChange} />
				<span> {this.props.children} </span>
			</label>

		);
	}
}
