import React from "react";
import { ColokList } from "./Colok.js";
import Input from "react-toolbox/lib/input/Input";

class Payment extends React.Component {
	render() {
		return (
			<div>

				<PaymentField />
				<h3> Avec qui avez-vous partagé ce paiement ? </h3>
				<h4> Séléctionnez tous les bénéficiaires (dont vous) </h4>

				<ColokList checkboxes />
			</div>
		);
	}
}

class PaymentField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
			error: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({ value: this.value });
	}

	render() {
		return (
			<Input
				type="number"
				label="How much did you spend ?"
				name="value"
				icon=" "
				hint=""
				error={this.state.error}
				value={this.state.value}
				onChange={this.handleChange}
				maxLength={16}
			/>
		);
	}
}

export default Payment;
