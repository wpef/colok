import React from "react";

class DebtsForm extends React.Component {
	constructor(props) {
		super(props);

		this.fetchColoks();

		this.state = {
			sharers: [],
			count: 0,
			shared: 0,
			reste: 0
		};
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

		if (val.value === true && copie.includes(colok._id) === false)
			copie.push(colok._id);
		else if (val.value === false && copie.includes(colok._id)) {
			var i = copie.indexOf(colok._id);
			if (i !== -1) {
				copie.splice(i, 1);
			}
		}

		let t = this.props.price;
		let n = copie.length;
		let rest = t % n;

		let shares = (t - rest) / n;

		this.props.onCheck(copie);

		this.setState({
			sharers: copie,
			count: copie.length,
			shared: shares,
			reste: rest
		});
	}

	render() {
		if (this.state.coloks) {
			let DebtForm = this.state.coloks.map(colok => {
				return (
					<DebtInput
						key={colok.name}
						price={this.props.shared}
						colok={colok}
						onCheck={this.handleCheck}
					/>
				);
			}, this);

			return (
				<div>
					{DebtForm}
					<ResteInput reste={this.props.reste} />
				</div>
			);
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

		if (this.state.value && this.props.price) {
			input = <input type="number" value={this.props.price} />;
		} else {
			input = <input type="number" value="" />;
		}

		if (this.props.colok) {
			return (
				<label className="row">
					<div className="col-xs start-xs">
						<input type="checkbox" onClick={this.handleChange} />
						<span>{this.props.colok.name}</span>
					</div>
					<div className="col-xs end-xs">{input}</div>
				</label>
			);
		} else return "loading...";
	}
}

class ResteInput extends React.Component {
	render() {
		let input;

		if (this.props.reste) {
			input = <input type="number" readOnly value={this.props.reste} />;
		} else {
			input = <input type="number" readOnly value="0" />;
		}

		return (
			<div>
				<label className="row">
					<div className="col-xs start-xs">
						<span className="big_label">Reste : </span>
					</div>
					<div className="col-xs end-xs">{input}</div>
				</label>
			</div>
		);
	}
}

export default DebtsForm;
