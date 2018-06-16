import React from "react";
import Input from "react-toolbox/lib/input/Input";

class PriceInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = { error: "", price : '0.00' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {

		let p = val.replace('.','');

		if ( p.length < 10 && parseInt(p, 10) >= 0 ) {

			let l = parseInt( p.substring(-2, p.length-2), 10 );
			let r = p.substring(p.length-2,p.length);

			if (l == 0) p = '0.' + r;
			else p = l + '.' + r;

			this.props.onPriceEntered(p);
			this.setState({price : p});
		}
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
				maxLength={5}
			/>
		);
	}
}

export default PriceInput;