import React, {Component}             from 'react';
import {Form, Button, Grid, TextArea} from 'semantic-ui-react';
import {withRouter}                   from "react-router-dom";
import {signup}                       from "../../../actions";
import {connect}                      from 'react-redux'
import {DateInput}                    from 'semantic-ui-calendar-react';
import ImageUploader                  from 'react-images-upload';

const styles = {
	form: {
		// paddingTop: 500,
		width:        '400px',
		marginTop:    200,
		marginBottom: 0
	}
};

class ReportDetails extends Component {
	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	handleCancelClick = () => {
		this.props.history.push("/")
	};

	render() {
		const {values} = this.props;
		return (
			<Grid centered>
				<div className="ui middle aligned center aligned grid" style={styles.form}>
					<div className="column">
						<h2 className="ui teal image header">
							{/*<img src="assets/images/logo.png" className="image" />*/}
							<div className="content">
								Incident details
							</div>
						</h2>
						<Form color='blue'>
							{/*<h1 className="ui centered">Incident details</h1>*/}
							<Form.Field>
								<label>Title</label>
								<input placeholder='Give it a title'
								       onChange={this.props.handleChange('title')}
								       defaultValue={values.title}
								/>
							</Form.Field>
							<Form.Field>
								<label>Description</label>
								<TextArea
									placeholder='Tell us more'
									style={{minHeight: 100}}
									onChange={this.props.handleChange('description')}
									defaultValue={values.description}
								/>
							</Form.Field>
							<Form.Field>
								<label>Evidence</label>
								<ImageUploader
									withIcon={true}
									buttonText='Choose images'
									onChange={this.props.onDrop}
									imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
								/>
							</Form.Field>
							<Form.Field>
								<label>Date of the incident</label>
								<DateInput
									name="date"
									placeholder="Date"
									value={values.date}
									iconPosition="left"
									onChange={this.props.handleChange('date')}
									animation={'scale'}
									dateFormat={'YYYY-MM-DD'}
								/>
							</Form.Field>
							<Button onClick={this.handleCancelClick}>Cancel</Button>
							<Button onClick={this.saveAndContinue}>Save And Continue </Button>
						</Form>
					</div>
				</div>
			</Grid>
		)
	}
}

export default connect(null, {signup})(withRouter(ReportDetails));