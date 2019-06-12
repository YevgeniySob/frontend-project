import React, { Component } from 'react';
import {Form, Button, Grid} from 'semantic-ui-react';
import {Link}               from "react-router-dom";

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 200,
		marginBottom: 0
	}
};

class AddressForm extends Component{
	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back  = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render(){
		const { values } = this.props;
		return(
			<Grid centered >
				<div className="ui middle aligned center aligned grid" style={styles.form}>
					<div className="column">
						<h2 className="ui teal image header">
							{/*<img src="assets/images/logo.png" className="image" />*/}
							<div className="content">
								Log-in to your account
							</div>
						</h2>
							<Form color='blue' >
								<h1 className="ui centered">Enter Personal Details</h1>
								<Form.Field>
									<label>State</label>
									<input placeholder='State'
									       onChange={this.props.handleChange('state')}
									       defaultValue={values.age}
									/>
								</Form.Field>
								<Form.Field>
									<label>Street</label>
									<input placeholder='Street'
									       onChange={this.props.handleChange('street')}
									       defaultValue={values.age}
									/>
								</Form.Field>
								<Form.Field>
									<label>City</label>
									<input placeholder='Age'
									       onChange={this.props.handleChange('city')}
									       defaultValue={values.age}
									/>
								</Form.Field>
								<Form.Field>
									<label>Zipcode</label>
									<input placeholder='Zipcode'
									       onChange={this.props.handleChange('zipcode')}
									       defaultValue={values.city}
									/>
								</Form.Field>
								<Button onClick={this.back}>Back</Button>
								<Button onClick={this.saveAndContinue}>Save And Continue </Button>
							</Form>
						<div className="ui message">
							New to us? <Link to={'/signup'}>Sign Up</Link>
						</div>
					</div>
				</div>
			</Grid>
		)
	}
}

export default AddressForm;