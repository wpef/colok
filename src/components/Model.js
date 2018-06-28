import React from "react";

class Model extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(d) {
		let v = d;

		this.setState({ value : v });
	}

	render() {
		return ( <Component onChange={this.handleChange} /> );
	}
}

export default Model;