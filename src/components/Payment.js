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

		this.handleChange.bind(this);
	}

	handleChange() {
		this.setState
	}

	render() {
		return (
			<div>

				<PaymentField value={this.state.value} onChange={this.handleChange('value')}/>
				<p> Avec qui avez-vous partagé ce paiement ? </p>
				<p> Séléctionnez tous les bénéficiaires (dont vous) </p>

				<ColokList checkboxes onChange={this.handleChange('sharers')} />
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

		console.log(props);

		this.handleChangeProps = this.props.onChange;

		console.log(this.handleChangeProps);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.handleChangeProps(this.value);
		this.setState({value : this.value});
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