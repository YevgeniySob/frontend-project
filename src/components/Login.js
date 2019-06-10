import React, { Component } from 'react'
import { connect }       from 'react-redux'

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	handleChange = e => {
		console.log(this.state);
		console.log(e.target.name);
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();

		this.setState({
			username: '',
			password: ''
		})
	};

	render() {
		return (
			<div className="ui middle aligned center aligned grid">
				<div className="column">
					<h2 className="ui teal image header">
						<img src="assets/images/logo.png" className="image" />
							<div className="content">
								Log-in to your account
							</div>
					</h2>
					<form className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input type="text" name="email" placeholder="E-mail address"/>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input type="password" name="password" placeholder="Password"/>
								</div>
							</div>
							<div className="ui fluid large teal submit button">Login</div>
						</div>

						<div className="ui error message">

						</div>

					</form>

					<div className="ui message">
						New to us? <a href="#">Sign Up</a>
					</div>
				</div>
			</div>


		);
	}
}

const mapStateToProps = state => {
	return {

	}
};

const mapDispatchToProps = dispatch => {
	return {

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)

