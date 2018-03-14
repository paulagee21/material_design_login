import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input';

class FormContainer extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handleUsernameChange(event) {
		this.setState({
			username: event.target.value 
		});
	}

	handlePasswordChange(event) {
		this.setState({ 
			password: event.target.value 
		});
	}

	render() {
		const isEnabled = 
			this.state.password.length > 0 &&
			this.state.username.length > 0;
		return (
			<div className="card">
				<div className="card-header">
					<button className="btn-action pink">+</button>
					<h2>Login</h2>
				</div>
				<div className="card-body">
					<form id="article-form" className="form">
						<Input 
							text="Username"
							label="username"
							type="text"
							id="username"
							class_name="form-control"
							container_class_name="col-xs-12"
							value={this.state.username}
							handleChange={this.handleUsernameChange}
							required="true"
						/>
						<Input
							text="Password"
							label="password"
							type="password"
							id="password"
							class_name="form-control"
							container_class_name="col-xs-12"
							value={this.state.password}
							handleChange={this.handlePasswordChange}
							required="true"
						/>
						<Input
							type="submit"
							id="submit"
							class_name="btn btn-lg col-xs-12"
							container_class_name="col-xs-8 col-xs-offset-2"
							value="Go"
							disabled={!isEnabled}
						/>
						<p className="text-center"><a href="#">Forgot your password?</a></p>
					</form>
				</div>
			</div>
		);
	}
}

export default FormContainer
