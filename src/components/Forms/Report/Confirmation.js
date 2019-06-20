import React, {Component}   from 'react';
import {Button, Grid, List} from 'semantic-ui-react';
import {withRouter}        from 'react-router-dom'

const styles = {
	form: {
		width:        '450px',
		marginTop:    200,
		marginBottom: 0,
		backgroundColor: '#fffed6',
		borderRadius: 5
	}
};

class Confirmation extends Component {

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
		// setTimeout(() => this.move(),3000);
	};

	move = () => {
		this.props.history.push('/')
	};

	render() {
		const {values: {title, description, date, city, state, street, zipcode}} = this.props;
		return (
			<Grid centered>
				<div className="ui grid" style={styles.form}>
					<div className="column">
						<h2 className="ui teal image header">
							<div className="content">
								Confirm your Details
							</div>
						</h2>
						<div>
							<p>Click Confirm if the following details have been correctly entered or can go back and edit.</p>
							<Grid >
								<Grid.Row>
									<Grid.Column width={5}>
										<List

											style={{textAlign: 'left'}}
											verticalAlign='middle'
											size={'big'}

										>
											<List.Item>
												<List.Content>Title:</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>Description:</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>Date:</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>City:</List.Content>
											</List.Item>
											<List.Item>
												<List.Content> State:</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>Street:</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>Zipcode:</List.Content>
											</List.Item>
										</List>

									</Grid.Column>
									<Grid.Column width={11}>
										<List
											style={{textAlign: 'left'}}
											verticalAlign='middle'
											size={'big'}

										>
											<List.Item>
												<List.Content>{title}</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>{description}</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>{date}</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>{city} </List.Content>
											</List.Item>
											<List.Item>
												<List.Content> {state}</List.Content>
											</List.Item>
											<List.Item>
												<List.Content>{street} </List.Content>
											</List.Item>
											<List.Item>
												<List.Content>{zipcode} </List.Content>
											</List.Item>
										</List>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Button onClick={this.back}>Back</Button>
									<Button onClick={this.props.handleSubmit}>Confirm</Button>
								</Grid.Row>
							</Grid>

						</div>
					</div>
				</div>
			</Grid>
		)
	}
}

export default withRouter(Confirmation);