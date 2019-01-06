import React from "react";
import Button from "react-toolbox/lib/button/Button";
import PriceInput from "./Payment/PriceInput";
import DebtsForm from "./Payment/DebtsForm";

class Payment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//Set state depending on API
			value: 0,
			sharers: [], //should be an array of Colok object
			name: "",
			shared: 0,
			reste: 0
		};

		this.handlePrice = this.handlePrice.bind(this);
		this.handleSharers = this.handleSharers.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(d) {
		let t = d.value ? d.value : this.state.value;
		let s = d.sharers ? d.sharers : this.state.sharers;
		let n = s.length;

		let shares = Math.round(t / n * 100) / 100;
		let tRounded = shares * 100 * n / 100;
		let reste = (t * 100 - tRounded * 100) / 100;

		console.log({
			t: t,
			n: n,
			shares: shares,
			r: reste,
			trounded: tRounded
		});

		this.setState({ value: t, sharers: s, shared: shares, reste: reste });
	}

	handlePrice(v) {
		let t = v;
		this.handleChange({ value: t });
	}

	handleSharers(d) {
		let a = d;
		this.handleChange({ sharers: a });
	}

	handleSubmit() {
		//Parse for API
		let APIpayment = {};

		APIpayment.name = prompt("Payment title", "Untitled");
		APIpayment.price = this.state.value;
		APIpayment.owner = this.props.user;
		APIpayment.sharers = this.state.sharers;

		fetch("/api/payments", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(APIpayment)
		})
			.then(response => response.json())

			.then(body => {
				let payment = body.payment;

				if (payment.debts.reste) {
					let reste = payment.debts.reste;
					let message = '';

					if (reste > 0)
						message = "Il reste " + reste + "€ à payer par quelqu'un ou à offrir 🎁 ";
					else if (reste < 0)
						message = "Vous gagnerez " + -reste + "€ ! La charité ça paie ! 💸 ";

					alert(message );
				}
			});
	}

	render() {
		return (
			<div className="col-md-6">
				<p> Combien avez-vous dépensé ? </p>

				<PriceInput onPriceEntered={this.handlePrice} />
				<p> Avec qui avez-vous partagé ce paiement ? </p>
				<p> Séléctionnez tous les bénéficiaires (dont vous) </p>

				<DebtsForm
					price={this.state.value}
					shared={this.state.shared}
					reste={this.state.reste}
					onCheck={this.handleSharers}
				/>

				<Button
					icon="payment"
					label="Enregistrer les dettes"
					raised
					primary
					onMouseUp={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default Payment;
