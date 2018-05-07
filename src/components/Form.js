import React from 'react';
import Input  from "react-toolbox/lib/input/Input";

class SignUpForm extends React.Component {
	state = { name: "", phone: "", email: "", hint: "" };

	handleChange = (name, value, icon) => {
		if (name == 'name' && value == 'i')
		{
			//error ='SISIS';
		}

		console.log(name);
		console.log(value);
		console.log(icon);

		this.setState({ ...this.state, [name]: value });
	};

	render() {
		return (
			<section>
				<Input
					type="text"
					label="Name"
					name="name"
					icon=" "
					value={this.state.name}
					onChange={this.handleChange.bind(this, "name")}
					maxLength={16}
				/>
				<Input
					type="email"
					label="Email address"
					icon="email"
					value={this.state.email}
					onChange={this.handleChange.bind(this, "email")}
				/>
				<Input
					type="tel"
					label="Phone"
					name="phone"
					icon="phone"
					value={this.state.phone}
					onChange={this.handleChange.bind(this, "phone")}
				/>

			</section>
		);
	}
}

export default SignUpForm;
