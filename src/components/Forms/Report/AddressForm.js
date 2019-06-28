import React, { Component }           from 'react';
import {Form, Button, Grid} from 'semantic-ui-react';
import {stateList}                    from "../../../state";

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 100,
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
							<div className="content">
								Address of the incident
							</div>
						</h2>
							<Form color='blue' >
								<Form.Select
									fluid
									label='State'
									options={stateList}
									placeholder='Select State'
									onChange={this.props.handleStateChange('state')}
									defaultValue={values.state}
								/>
								<Form.Field>
									<label>Street</label>
									<input placeholder='Street'
									       onChange={this.props.handleChange('street')}
									       defaultValue={values.street}
									/>
								</Form.Field>
								<Form.Field>
									<label>City</label>
									<input placeholder='City'
									       onChange={this.props.handleChange('city')}
									       defaultValue={values.city}
									/>
								</Form.Field>
								<Form.Field>
									<label>Zipcode</label>
									<input placeholder='Zipcode'
									       onChange={this.props.handleChange('zipcode')}
									       defaultValue={values.zipcode}
									/>
								</Form.Field>
								<Button onClick={this.back}>Back</Button>
								<Button onClick={this.saveAndContinue}>Save And Continue </Button>
							</Form>
					</div>
				</div>
			</Grid>
		)
	}
}

export default AddressForm;