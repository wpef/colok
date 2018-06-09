import request from 'request';
import React from "react";
import Input from "react-toolbox/lib/input/Input";
import Button from "react-toolbox/lib/button/Button";

//class InputName extends React.component {
//
//}

class SignUpForm extends React.Component {
	state = {
		name: "",
		email: "",
		password: "",
		errors: {
			name: "",
			email: "",
			password: ""
		}
	};

	submit = () => {
		request.post({
			url: "http://localhost:8080/api/coloks",
			body: {
				name : this.state.name,
				email : this.state.email,
				password : this.state.password
			},
			json : true
		},
		(error, response, body) => {
			console.log('error', error);
			console.log('response', response);
			console.log('body', body);

			if (body.error) {

				if ( body.error.errors ) {
					let errors = body.error.errors;
					this.setState({
						errors: {
							name: errors.name ? errors.name.message : '',
							email : errors.email ? errors.email.message : '' ,
							password : errors.password ? errors.password.message : '',
					 } });
				}
			}
		});

	};

	handleChange = (name, value) => {
		if (name === "name") {
			let newValue = value.replace(/\s/g, "");
			value = newValue;
		}

		if (name === "name" && value === "i")
			this.setState({ errors: { name: "yo" } });
		else this.setState({ errors: { name: "" } });

		this.setState({ [name]: value });
	};

	render() {
		return (
			<form className={this.props.className}>
				<Input
					type="text"
					label="Name"
					name="name"
					icon=" "
					hint=""
					error={this.state.errors.name}
					autoComplete="username"
					value={this.state.name}
					onChange={this.handleChange.bind(this, "name")}
					maxLength={16}
				/>
				<Input
					type="email"
					label="Email address"
					icon="email"
					error={this.state.errors.email}
					autoComplete="username"
					value={this.state.email}
					onChange={this.handleChange.bind(this, "email")}
				/>
				<Input
					type="password"
					label="Password"
					icon="lock"
					error={this.state.errors.password}
					autoComplete="current-password"
					value={this.state.password}
					onChange={this.handleChange.bind(this, "password")}
				/>

				<Button
					icon="send"
					label="Sign up"
					raised
					primary
					onMouseUp={this.submit.bind(this)}
				/>
			</form>
		);
	}
}

export default SignUpForm;
