import React from "react";

class Debts extends React.Component {
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
		return ( <Debt user={this.props.user} onChange={this.handleChange} /> );
	}
}

class Debt extends React.Component {
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

		return ( <div onChange={this.handleChange} /> );
	}
}

export default Debts;