import React from "react";

export class Checkbox extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: false, shared: 0 };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		let value = this.state.value ? false : true;
		this.setState({ value: value });
		this.props.onCheck({
			colok: this.props.colok,
			value: value
		});

		if (value) {
			this.setState({ shared: this.props.price });
		}
	}

	render() {
		console.log(this.props.price);

		if (this.props.colok) {
			return (
				<label className="row">
					<div className="col-xs start-xs">
						<input type="checkbox" onClick={this.handleChange} />
						<span>{this.props.colok.name}</span>
					</div>
					<div className="col-xs end-xs">
						<input type="number" value={this.props.price} />
					</div>
				</label>
			);
		} else return "loading...";
	}
}
