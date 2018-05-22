import React from "react";
//import { ColokList } from "./Colok";
import Input from "react-toolbox/lib/input/Input";
import { Checkbox } from "./Checkbox";

class Payment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			sharers: [],
			name: "",
		};

		this.handlePrice = this.handlePrice.bind(this);
		this.handleSharers = this.handleSharers.bind(this);
	}

	handlePrice(d) {
		this.setState({ value: d });
	}

	handleSharers(d) {
		let a = d;
		this.setState({ sharers: a });
	}

	render() {

		return (
			<div className="col-md-6">
				<p> Combien avez-vous dépensé ? </p>

				<PaymentField onPriceEntered={this.handlePrice} />
				<p> Avec qui avez-vous partagé ce paiement ? </p>
				<p> Séléctionnez tous les bénéficiaires (dont vous) </p>

				<Checkboxes price={this.state.value} onCheck={this.handleSharers} />
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

	handleChange(val) {
		var price = val;
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

class Checkboxes extends React.Component {
	constructor(props) {
		super(props);

		this.fetchColoks();

		this.state = { sharers: [], count : 0, shared : 0 };

		this.handleCheck = this.handleCheck.bind(this);
	}

	fetchColoks() {
		fetch("/api/coloks/")
			.then(res => {
				return res.json();
			})
			.then(resp => {
				this.setState({ coloks: resp.coloks });
			});
	}

	handleCheck(val) {
		var copie = this.state.sharers;

		let colok = val.colok;

		if (val.value === true && copie.includes(colok.name) === false)
			copie.push(colok.name);
		else if (val.value === false && copie.includes(colok.name)) {
			var i = copie.indexOf(colok.name);
			if (i !== -1) {
				copie.splice(i, 1);
			}
		}

		let shares = this.props.price;
		shares = shares / copie.length;

		this.props.onCheck(copie);

		this.setState({ sharers : copie, count : copie.length, shared : shares });
	}

	render() {

		if (this.state.coloks) {
			let form = this.state.coloks.map(colok => {
				return <Checkbox key={colok.name} price={ this.state.shared } colok={colok} onCheck={this.handleCheck} />;
			}, this);

			return <form> {form} </form>;
		} else return "loading...";
	}
}

export default Payment;
