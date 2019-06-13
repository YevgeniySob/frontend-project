import React, {Component}  from 'react'
import {connect}           from 'react-redux'
import {createReport}      from '../../../actions'
import {withRouter}        from 'react-router-dom'
import AddressForm         from './AddressForm'
import ReportDetails       from './ReportDetails'
import Success             from './Success'
import Confirmation        from './Confirmation'
import {fetch_address_api} from '../../../adapter/adapter'

class ReportForm extends Component {

	state = {
		step: 1,
		title:   '',
		description: '',
		image: '',
		date: '',
		state: '',
		city: '',
		street: '',
		zipcode: '',
		longitude: '',
		latitude: ''
	};

	addressString = ({city, zipcode, state, street}) => {
		return city + ', ' + zipcode + ', ' + street + ', ' + state
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

	handleStateChange = input => (e, {value}) => {
		this.setState({
				[input]: value
		})
	};

	handleDetailsChange = input => (e, test) => {
		if (input === 'date') {
			this.setState({
					[input]: test.value
			})
		} else {
			this.setState({
				[input]: e.target.value
			})
		}
	};

	handleAddressChange = input => e => {
		this.setState({
				[input]: e.target.value
		})
	};

	onDrop = picture => {
		this.setState({
				image: picture[0]
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		const addressToSend = this.addressString(this.state);
		fetch_address_api(addressToSend).then(data => {
			const lat = data.results[0].locations[0].latLng.lat;
			const log = data.results[0].locations[0].latLng.lng;

			this.setState({
					longitude: log,
					latitude: lat
			},() => this.props.createReport(this.state, this.props.user.id))
		})
	};

	render(){
		console.log(this.state);
		const { step } = this.state;
		// eslint-disable-next-line default-case
		switch(step) {
			case 1:
				return <ReportDetails
					nextStep={this.nextStep}
					handleChange = {this.handleDetailsChange}
					onDrop={this.onDrop}
					values={this.state}
				/>;
			case 2:
				return <AddressForm
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange = {this.handleAddressChange}
					handleStateChange = {this.handleStateChange}
					values={this.state}
				/>;
			case 3:
				return (<Confirmation
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={this.state}
					handleSubmit={this.handleSubmit}
				/>);
			case 4:
				return <Success />
		}
	}
}

const mapStateToProps = state => {
	return {
		user: state.userReducer.user
	}
};

export default connect(mapStateToProps, { createReport })(withRouter(ReportForm))
