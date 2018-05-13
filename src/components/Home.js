import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = { name : '' };

		fetch("/api/coloks/" + this.props.user)
			.then(res => {
				return res.json();
			})
			.then(resp => {
				let user = resp.colok;
				this.setState({ name: user.name });
			});
	}

	render() {
		return <p className='Welcome'> Welcome back, {this.state.name} </p>;
	}
}
