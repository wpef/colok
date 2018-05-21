import React from "react";
import { ColokList } from "./Colok.js";
import Input from "react-toolbox/lib/input/Input";

class Payment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value : 0,
			sharers : [],
			name : '',
		};

		this.handlePrice = this.handlePrice.bind(this);

	}

	handlePrice(d) {
		this.setState({value : d});
	}

	render() {
		return (
			<div>

				<PaymentField onPriceEntered={this.handlePrice} />
				<p> Avec qui avez-vous partagé ce paiement ? </p>
				<p> Séléctionnez tous les bénéficiaires (dont vous) </p>

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
			error:"",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		var price = val;
		this.props.onPriceEntered(price);
	}

	render() {
		return (
			<Input
				type='number'
				label="How much did you spend ?"
				name="value"
				icon=" "
				hint=""
				error={this.state.error}
				onChange={this.handleChange}
				maxLength={16}
			/>
		);
	}
}

export default Payment;
