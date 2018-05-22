import React from "react";

export class Checkbox extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: false };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		let value = this.state.value ? false : true;
		this.setState({ value: value });
		this.props.onCheck({
			colok : this.props.colok,
			value : value,
		});
	}

	render() {

		if (this.props.colok) {
			return (

				<label>
					<input type="checkbox" onClick={this.handleChange} />
					<span>{this.props.colok.name}</span>
				</label>

			);
		}
		else
			return 'loading...';
	}
}
