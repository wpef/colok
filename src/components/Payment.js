import React from "react";
import Button from "react-toolbox/lib/button/Button";
import PriceInput from './Payment/PriceInput';
import DebtsForm from './Payment/DebtsForm';

class Payment extends React.Component {
	constructor(props) {
		super(props);

		this.state = { //Set state depending on API
			value: 0,
			sharers: [], //should be an array of Colok object
			name: ""
		};

		this.handlePrice = this.handlePrice.bind(this);
		this.handleSharers = this.handleSharers.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handlePrice(d) {
		this.setState({ value: d });
	}

	handleSharers(d) {
		let a = d;
		this.setState({ sharers: a });
	}

	handleSubmit() {	

		//Parse for API	
		let APIpayment = {};

		APIpayment.name = prompt("Payment title", 'Untitled');
		APIpayment.price = this.state.value;
		APIpayment.owner = this.props.user;
		APIpayment.sharers = this.state.sharers;

		console.log(APIpayment);

		fetch('/api/payments', {
			method : 'POST',
			body : APIpayment,
		})
 		.then(response => response.json())
  		
  		.then(body => {
  			console.log(body);
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
