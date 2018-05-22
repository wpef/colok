import React from "react";

class DebtsForm extends React.Component {
	constructor(props) {
		super(props);

		this.fetchColoks();

		this.state = { sharers: [], count: 0, shared: 0 };

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

		this.setState({ sharers: copie, count: copie.length, shared: shares });
	}

	render() {
		if (this.state.coloks) {
			let form = this.state.coloks.map(colok => {
				return (
					<DebtInput
						key={colok.name}
						price={this.state.shared}
						colok={colok}
						onCheck={this.handleCheck}
					/>
				);
			}, this);

			return <div> {form} </div>;
		} else return "loading...";
	}
}

class DebtInput extends React.Component {
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
		let input;
		
		console.log(this.props.price); //Is not updated with paymentField
		
		if (this.state.value) {
			input = <input type="number" value={this.props.price} />;
		}
		else {
			input = <input type="number" value=''/>;
		}

		if (this.props.colok) {
			return (
				<label className="row">
					<div className="col-xs start-xs">
						<input type="checkbox" onClick={this.handleChange} />
						<span>{this.props.colok.name}</span>
					</div>
					<div className="col-xs end-xs">
						{input}
					</div>
				</label>
			);
		} else return "loading...";
	}
}

export default DebtsForm;