import React, {Component}   from 'react';
import {Button, Grid, List} from 'semantic-ui-react';
import {Link}               from "react-router-dom";

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 200,
		marginBottom: 0
	}
};

class Confirmation extends Component {
	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {values: {report: {title, description, image, date}, address: {city, state, street, zipcode}}} = this.props;

		return (
			<Grid centered>
				<div className="ui middle aligned center aligned grid" style={styles.form}>
					<div className="column">
						<h2 className="ui teal image header">
							{/*<img src="assets/images/logo.png" className="image" />*/}
							<div className="content">
								Log-in to your account
							</div>
						</h2>
						<div>
							<h1 className="ui centered">Confirm your Details</h1>
							<p>Click Confirm if the following details have been correctly entered</p>
							<List>
								<List.Item>
									{/*<List.Icon name='users' />*/}
									<List.Content>Title: {title}</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>Description: {description}</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>Image: {image}            </List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name='calendar'/>
									<List.Content>Date: {date}</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>City: {city} </List.Content>
								</List.Item>
								<List.Item>
									<List.Content> State: {state}</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>Street: {street} </List.Content>
								</List.Item>
								<List.Item>
									<List.Content>Zipcode: {zipcode} </List.Content>
								</List.Item>
							</List>

							<Button onClick={this.back}>Back</Button>
							<Button onClick={this.saveAndContinue}>Confirm</Button>
						</div>
						<div className="ui message">
							New to us? <Link to={'/signup'}>Sign Up</Link>
						</div>
					</div>
				</div>
			</Grid>
		)
	}
}

export default Confirmation;