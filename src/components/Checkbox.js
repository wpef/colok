import React from "react";

export class Checkbox extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: false, shared : 0 };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		let value = this.state.value ? false : true;
		this.setState({ value: value });
		this.props.onCheck({
			colok : this.props.colok,
			value : value,
		});

		if (value)
			{ this.setState({shared:this.props.price}) };
	}

	render() {

		console.log(this.props.price);

		if (this.props.colok) {
			return (

				<label>
					<input type="checkbox" onClick={this.handleChange} />
					<span>{this.props.colok.name}</span>
					<input type='number' value={this.props.price} />
				</label>

			);
		}
		else
			return 'loading...';
	}
}
