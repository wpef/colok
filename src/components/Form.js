import request from 'request';
import React from 'react';
import Input  from "react-toolbox/lib/input/Input";
import Button from 'react-toolbox/lib/button/Button';


//class InputName extends React.component {
//
//}

class SignUpForm extends React.Component {
	state = { name: "", email: "", password : "", hint: "" };

	submit = () => {
		// request({
		// 	url: '/api/coloks',
		// 	method: 'GET',
		// 	json: {
		// 		name : this.state.name,
		// 		email : this.state.email,
		// 		password : this.state.password
		// 	}
		// }, 
		// (error, response, body) => {
		// 	console.log('error', error);
		// 	console.log('response', response);
		// 	console.log('body', body);
		// });
		fetch('/api/coloks')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(users => { 
                console.log(users); 
                this.setState({ name : users.coloks[0].name });
                console.log(this.state);
             });
	};

	handleChange = (name, value) => {
		if (name === 'name' && value === 'i')
		{
			this.props.hint='yo';
		}

		console.log(name);
		console.log(value);

		this.setState({ ...this.state, [name]: value });
	};

	render() {
		return (
			<form>
				<Input
					type="text"
					label="Name"
					name="name"
					icon=" "
					hint=''
					autoComplete='username'
					value={this.state.name}
					onChange={this.handleChange.bind(this, "name")}
					maxLength={16}
				/>
				<Input
					type="email"
					label="Email address"
					icon="email"
					autoComplete='username'
					value={this.state.email}
					onChange={this.handleChange.bind(this, "email")}
				/>
				<Input
					type="password"
					label="Password"
					icon="lock"
					autoComplete='current-password'
					value={this.state.email}
					onChange={this.handleChange.bind(this, "email")}
				/>

				 <Button icon='send' label='Sign up' raised primary onMouseUp={this.submit} />

			</form>
		);
	}
}

export default SignUpForm;
