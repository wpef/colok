import React from "react";
import Input from "react-toolbox/lib/input/Input";

class PriceInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = { error: "", price: "0.00" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		let p = val.replace(".", "");

		if (p.length < 10 && parseInt(p, 10) >= 0) {
			let l = p.substring(-2, p.length - 2);
			let r = p.substring(p.length - 2, p.length);

			if ( l === 0 || l.length === 0 ) l = "0";
			else l = parseInt(l, 10);

			p = l + "." + r;

			this.props.onPriceEntered(p);
			this.setState({ price: p, error : '' });

		} else this.setState({error : 'Vous ne pouvez pas ajouter un paiement de plus de 9999999,99€'});
	}

	render() {
		return (
			<Input
				type="number"
				label="How much did you spend ?"
				name="value"
				error={this.state.error}
				value={this.state.price}
				onChange={this.handleChange}
				maxLength={10}
			/>
		);
	}
}

export default PriceInput;
