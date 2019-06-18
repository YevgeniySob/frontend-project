import React, { Component }                                   from 'react';
import { connect }                                            from 'react-redux'
import waitForReports                                         from '../HOC/waitForReports'
import {Button, Form, Grid, Modal, Image, Dropdown, Header} from 'semantic-ui-react'
import LazyLoad                                               from "react-lazyload";
import CommentsContainer                                      from '../components/Comments/CommentsContainer'
import {addComment} from '../actions'

const styles = {
	mainGrid: {
		marginBottom: 10,
		marginTop: 0
	},
	icon: {
		padding: 0,
		marginRight: 0,
		marginBottom: 5,
		marginTop: 5
	},
	comment: {
		boxShadow: 0
	}
};

const friendOptions = [
	{
		key: 'date',
		text: 'date',
		value: 'Date',
	},
	{
		key: 'popularity',
		text: 'popularity',
		value: 'Popularity',
	},
];

const parseImageSize = ({image}) => {
	if (image.includes('cloudinary')) {
		return image.split('/w_500').join('')
	} else {
		return image.replace('300', '500').replace('500', '700')
	}
};

const capitalizeFirstLetter = string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

class ReportShow extends Component {

	state = {
		content: '',
		reportId: this.props.report.id,
		userId: this.props.report.user.id
	};

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.props)
		this.props.addComment(this.state)
	};

	render() {
		console.log('current STATE', this.state);
		const { id: reportId, title, votes, image, description, user: { id, reports_num, username}, comments} = this.props.report;

		return (
				<Grid
					style={{marginTop: 100}}
					columns={2}
					centered
					// color={'red'}
					relaxed
				>
					<Grid.Column
						width={9}
						// color={'olive'}
					>
						<Grid.Row color={'green'}>
							<Grid.Column>
								<Grid.Row style={{backgroundColor: 'grey'}}>
									tumbs up and down
								</Grid.Row>
								<Grid.Row>
									<Header as='h2'>
										{capitalizeFirstLetter(title)}
									</Header>
								</Grid.Row>
								<Grid.Row>
									Description
								</Grid.Row>
								<Grid.Row color={'red'}>
									<Modal
										basic
										size={'small'}
										trigger={<Image src={parseImageSize({image})} alt={'wowo'}/>}
										// header={capitalizeFirstLetter(title)}
										content={<Image src={parseImageSize({image})} alt={'wowo'}/>}
										// actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
									/>
									{/*<Image src={parseImageSize({image})} alt={'wowo'}/>*/}
								</Grid.Row>
								<Grid.Row>
									Address
								</Grid.Row>
								<Grid.Row>
									more info
								</Grid.Row>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row color={'orange'} style={{marginTop: 20}}>
							Comment as {username}
							<Form
								onSubmit={this.handleSubmit}
								style={{padding: 0}}
							>
								<Form.Group
									widths='equal'
									style={{padding: 0}}

								>
									<Form.TextArea
										inline={false}
										placeholder='Comment'
										onChange={this.handleChange('content')}
									/>
									<Button
										type="submit"
										className="ui button"
										content='Comment'
										style={{borderRadius: 0}}
									/>
								</Form.Group>
							</Form>
						</Grid.Row>
						<Grid.Row color={'olive'} style={{marginTop: 20}}>
							Sort by{' '}
							<Dropdown
								inline
								options={friendOptions}
								defaultValue={friendOptions[0].value}
							/>
										<CommentsContainer comments={this.props.report.comments}/>
						</Grid.Row>
					</Grid.Column>
					<Grid.Column
						width={3}
						color={'black'}
						style={{marginLeft: 20}}
					>
					</Grid.Column>

				</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		reports: state.reportReducer.reports
	}
};

export default connect(mapStateToProps, {addComment})(waitForReports(ReportShow))

