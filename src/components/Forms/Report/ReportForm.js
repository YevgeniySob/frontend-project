import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { createReport }            from '../../../actions'
import { withRouter}        from 'react-router-dom'
import AddressForm from './AddressForm'
import ReportDetails from './ReportDetails'
import Success from './Success'
import Confirmation from './Confirmation'

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 200,
		marginBottom: 0
	}
};

class ReportForm extends Component {

	state = {
		step: 1,
		report: {
			title: '',
			description: '',
			image: '',
			date: '',
		},
		address: {
			state: '',
			city: "",
			street: "",
			zipcode: ''
		},
		geolocation: {
			longitude: '',
			latitude: ''
		}
	};

	nextStep = () => {
		const { step } = this.state
		this.setState({
			step : step + 1
		})
	};

	prevStep = () => {
		const { step } = this.state
		this.setState({
			step : step - 1
		})
	};

	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log('HANDLE SUBMIT', e.target);

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

	render(){
		const { step } = this.state;
		// eslint-disable-next-line default-case
		switch(step) {
			case 1:
				return <ReportDetails
					nextStep={this.nextStep}
					handleChange = {this.handleChange}
					values={this.state.report}
				/>;
			case 2:
				return <AddressForm
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange = {this.handleChange}
					values={this.state.address}
				/>;
			case 3:
				return (<Confirmation
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={this.state}
				/>);
			case 4:
				return <Success />
		}
	}
}

export default connect(null, { createReport })(withRouter(ReportForm))
