import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Grid }             from 'semantic-ui-react'
import { Link }               from "react-router-dom";
import { login }            from '../../actions'
import { withRouter}        from 'react-router-dom'

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 200,
		marginBottom: 0
	}
};

class Login extends Component {

	state = {
		username: '',
		password: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();

		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				user: this.state
			})
		})
			.then(r => r.json())
			.then(data => {
				const { token, user } = data;
				localStorage.setItem('token', token);
				this.props.login(user);
				this.props.history.push("/")

			});
		this.setState({
			username: '',
			password: ''
		})
	};

	render() {
		console.log(this.state);
		return (
			<Grid centered >
				<div className="ui middle aligned center aligned grid" style={styles.form}>
					<div className="column">
						<h2 className="ui teal image header">
							{/*<img src="assets/images/logo.png" className="image" />*/}
								<div className="content">
									Log-in to your account
								</div>
						</h2>
						<form className="ui large form" onSubmit={this.handleSubmit}>
							<div className="ui stacked segment">
								<div className="field">
									<div className="ui left icon input">
										<i className="user icon"/>
										<input value={this.state.email} type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon"/>
										<input value={this.state.password} type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
									</div>
								</div>
								<button type='submit' className="ui fluid large teal submit button">Login</button>
							</div>
							<div className="ui error message">
							</div>
						</form>
						<div className="ui message">
							New to us? <Link to={'/signup'}>Sign Up</Link>
						</div>
					</div>
				</div>
			</Grid>
		);
	}
}

export default connect(null, { login })(withRouter(Login))

