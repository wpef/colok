import React from "react";
import {ColokList} from './Colok.js'


class Payment extends React.Component {
	render() {
		return (

			<div>

			<h3> Avec qui avez-vous partagé ce paiement ? </h3>
			<h4> Séléctionnez tous les bénéficiaires (dont vous) </h4>

			<ColokList checkboxes />
			</div>

		);
	}
}

export default Payment;