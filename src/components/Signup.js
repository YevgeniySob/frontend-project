import React, { Component } from 'react'
import { connect }          from 'react-redux'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	}
});


class Login extends Component {
	state = {
		form: {
			username: '',
			password: '',
			email: '',
		}
	};

	handleChange = name => event => {
		// console.log(this.state)
		console.log(name)
		console.log(event)
		this.setState({
			[name]: event.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();

		this.setState({
			username: '',
			password: '',
			email: ''
		})
	};

	render() {
		return (
			<div>

			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
};

export default connect(null, mapDispatchToProps)(Login)
