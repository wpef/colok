import React from "react";
import { Checkbox } from "./Checkbox";

export class ColokList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			coloks: '',
			list: "Loading...",
			checkboxes: "Loading..."
		};

		fetch("/api/coloks/")
			.then(res => {
				return res.json();
			})
			.then(resp => {
				let coloks = resp.coloks;

				let list = coloks.map(colok => {
					return <li> {colok.name} </li>;
				});

				let checkboxes = coloks.map(colok => {
					return <Checkbox key={colok.name}>{colok.name}</Checkbox>;
				});

				this.setState({
					coloks: coloks,
					list: list,
					checkboxes: checkboxes
				});
			});
	}

	render() {
		if (this.props.checkboxes)
			return <form> {this.state.checkboxes} </form> ;

		else
			return <ul> {this.state.list} </ul>;
	}
}
