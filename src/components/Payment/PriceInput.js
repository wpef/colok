import React from "react";
import Input from "react-toolbox/lib/input/Input";

class PriceInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = { error: "" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		let price = val;
		this.props.onPriceEntered(price);
	}

	render() {
		return (
			<Input
				type="number"
				label="How much did you spend ?"
				name="value"
				error={this.state.error}
				onChange={this.handleChange}
				maxLength={5}
			/>
		);
	}
}

export default PriceInput;