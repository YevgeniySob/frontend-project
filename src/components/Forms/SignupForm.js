import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Grid, Item }       from 'semantic-ui-react'
import Homer                from '../../png/animated_homer_simpson.gif'
// import Mona                 from '../png/animated_mona_lisa.gif'
// import Dog                  from '../png/around_dog.gif'
// import Beavis               from '../png/beavis_butthead.gif'
// import Cat                  from '../png/blue_cat.gif'
import {Link, withRouter}               from "react-router-dom";
import { signup }           from '../../actions'
import {signupForm} from '../../adapter/adapter'

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 200,
		marginBottom: 0
	}
};

class SignupForm extends Component {
	state = {
		username: '',
		password: '',
		email: '',
		first_name: '',
		last_name: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		signupForm(this.state)
			.then(data => {
				if (!data.errors) {
					const { token, user } = data;
					localStorage.setItem('token', token);
					this.props.signup(user);
					this.props.history.push("/")

				} else {
					console.error('Username exist')
				}
			});
		this.setState({
			username: '',
			password: '',
			email: '',
			first_name: '',
			last_name: ''
		})
	};

	render() {
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
										<input value={this.state.username} type="text" name="username" placeholder="Username" onChange={this.handleChange}  autoComplete="username"/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon"/>
										<input value={this.state.email} type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon" />
										<input value={this.state.password} type="password" name="password" placeholder="Password" onChange={this.handleChange} autoComplete="current-password"/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon" />
										<input value={this.state.first_name} type="text" name="first_name" placeholder="First name" onChange={this.handleChange}/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon" />
										<input value={this.state.last_name} type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange}/>
									</div>
								</div>
								<Item.Image size='tiny' src={Homer} />
								<button type='submit' className="ui fluid large teal submit button">Signup</button>
							</div>

							<div className="ui error message">

							</div>

						</form>

						<div className="ui message">
							Already have an account ? <Link to={'/login'}>Login</Link>
						</div>
					</div>
				</div>
			</Grid>
		);
	}
}

export default connect(null, { signup })(withRouter(SignupForm))

