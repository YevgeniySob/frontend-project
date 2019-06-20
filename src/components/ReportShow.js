import React, {Component}                                                                  from 'react';
import {connect}                                                                           from 'react-redux'
import waitForReports                                                                      from '../HOC/waitForReports'
import {Button, Form, Grid, Modal, Image, Dropdown, Header, Icon}                          from 'semantic-ui-react'
// import LazyLoad                                                                                     from "react-lazyload";
import CommentsContainer
                                                                                           from '../components/Comments/CommentsContainer'
import {showModal, addComment, downvoteReport, upvoteReport, sortByDate, sortByPopularity} from '../actions'

const styles = {
	mainGrid: {
		marginBottom: 10,
		marginTop:    0
	},
	icon:     {
		padding: 0,
		margin:  0,
	},
	comment:  {
		boxShadow: 0
	}
};

const sortOptions = [
	{
		key:   'date',
		text:  'date',
		value: 'date',
	},
	{
		key:   'popularity',
		text:  'popularity',
		value: 'popularity',
	},
];

const parseImageSize = ({image}) => {
	if (image.includes('cloudinary')) {
		return image.split('/w_500').join('')
	}
	else {
		return image.replace('300', '500').replace('500', '700')
	}
};

const capitalizeFirstLetter = string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

class ReportShow extends Component {

	state = {
		content:  '',
		reportId: this.props.report.id
	};

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	handleUpvoteClick = id => {
		if (this.props.user.id === 0) {
			this.props.showModal()
		}
		else {
			fetch('http://localhost:3000/report_vote', {
				method:  'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept":       "application/json"
				},
				body:    JSON.stringify({
					vote:     'up',
					reportId: id
				})
			});
			this.props.upvoteReport(id)
		}
	};

	handleDownvoteClick = id => {
		if (this.props.user.id === 0) {
			this.props.showModal()
		}
		else {
			fetch('http://localhost:3000/report_vote', {
				method:  'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept":       "application/json"
				},
				body:    JSON.stringify({
					vote:     'down',
					reportId: id
				})
			});
			this.props.downvoteReport(id)
		}
	};

	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.props.user.id === 0) {
			this.props.showModal()
		}
		else {
			if (this.state.content !== '') {
				this.props.addComment({...this.state, userId: this.props.user.id});
				this.setState({
					content: ''
				})
			}
		}
	};

	sortBy = (e, {value}) => {
		if (value === 'date') {
			this.props.sortByDate(value)
		}
		else if (value === 'popularity') {
			this.props.sortByPopularity(value)
		}
	};

	render() {
		const {id: reportId, title, votes, image, description, user: {username}} = this.props.report;

		return (
			<Grid
				style={{marginTop: 100, background: 'white'}}
				columns={2}
				centered
				relaxed
			>
				<Grid.Column
					width={9}
					style={{maxWidth: '40%'}}
				>
					<Grid.Row color={'green'}>
						<Grid.Column>
							<Grid>
								<Grid.Row>
									<Grid.Column style={{paddingRight: 0}} onClick={() => this.handleUpvoteClick(reportId)}>
										<Icon style={styles.icon} name='arrow up' className={'arrow'}/>
									</Grid.Column>
									<Grid.Column>
										{votes}
									</Grid.Column>
									<Grid.Column style={{paddingLeft: 4}} onClick={() => this.handleDownvoteClick(reportId)}>
										<Icon style={styles.icon} name='arrow down' className={'arrow'}/>

									</Grid.Column>
								</Grid.Row>
							</Grid>
							<Grid.Row centered>
								<Header as='h2'>
									{capitalizeFirstLetter(title)}
								</Header>
							</Grid.Row>
							<Grid.Row>
								{description}
							</Grid.Row>
							<Grid.Row color={'red'}>
								<Modal
									basic
									size={'small'}
									trigger={<Image src={parseImageSize({image})} alt={'wowo'}/>}
									content={<Image src={parseImageSize({image})} alt={'wowo'}/>}
								/>
							</Grid.Row>
							<Grid.Row>
								Address
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
									value={this.state.content}
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
							onChange={this.sortBy}
							inline
							options={sortOptions}
							defaultValue={sortOptions[0].value}
						/>
						<CommentsContainer reportId={reportId}/>
					</Grid.Row>
				</Grid.Column>
				<Grid.Column
					width={3}
					style={{marginLeft: 20}}
				>
				</Grid.Column>

			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		reports: state.reportReducer.reports,
		user:    state.userReducer.user
	}
};

export default connect(mapStateToProps, {
	addComment,
	downvoteReport,
	upvoteReport,
	sortByDate,
	sortByPopularity,
	showModal
})(waitForReports(ReportShow))

