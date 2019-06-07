import React, { Component } from 'react'
import { connect }          from 'react-redux'
import TextField            from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

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
		username: '',
		password: ''
	};

	handleChange = e => {
		console.log(this.state)
		console.log(e.target.name)
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
		const { classes } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
				<TextField
					id="outlined-email-input"
					label="Username"
					className={classes.textField}
					margin="normal"
					type="email"
					name="username"
					autoComplete="email"
					variant="outlined"
					onChange={this.handleChange}
					value={this.state.username}
				/>
				<TextField
					id="outlined-password-input"
					label="Password"
					type="password"
					name="password"
					autoComplete="current-password"
					variant="outlined"
					className={classes.textField}
					margin="normal"
					onChange={this.handleChange}
					value={this.state.password}
				/>
				<TextField
					id="outlined-email-input"
					label="Username"
					className={classes.textField}
					margin="normal"
					type="email"
					name="username"
					autoComplete="email"
					variant="outlined"
					onChange={this.handleChange}
					value={this.state.username}
				/>
				<TextField
					id="outlined-password-input"
					label="Password"
					type="password"
					name="password"
					autoComplete="current-password"
					variant="outlined"
					className={classes.textField}
					margin="normal"
					onChange={this.handleChange}
					value={this.state.password}
				/>
				<TextField
					id="outlined-email-input"
					label="Username"
					className={classes.textField}
					margin="normal"
					type="email"
					name="username"
					autoComplete="email"
					variant="outlined"
					onChange={this.handleChange}
					value={this.state.username}
				/>
				<TextField
					id="outlined-helperText"
					label="Helper text"
					defaultValue="Default Value"
					className={classes.textField}
					helperText="Some important text"
					margin="normal"
					variant="outlined"
				/>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Login))
