import React, { PureComponent }             from 'react'
import { connect }                          from 'react-redux'
import { Header, Popup, Grid, Image, Icon } from 'semantic-ui-react'
import LazyLoad                             from 'react-lazyload'
import {Link}                               from "react-router-dom";
import { downvoteReport, upvoteReport } from '../actions/reportActions'


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

class ReportCard extends PureComponent {

	state = {
		user: {
			days: '',
			full_name: ''
		}
	};

	userDate = date => {
		let date1 = new Date();
		let date2 = new Date(date.slice(0, 10))
		const diffTime = date1.getTime() - date2.getTime()
		const diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		this.changeDate(diff)
	};

	handleCardClick = e => {
		const id = e.target;
		// console.log(id)
	};

	handleUpvoteClick = id => {
		fetch('http://localhost:3000/report_vote', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				vote: 'up',
				reportId: id
			})
		});
		this.props.upvoteReport(id)
	};

	handleDownvoteClick = id => {
		fetch('http://localhost:3000/report_vote', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				vote: 'down',
				reportId: id
			})
		});
		this.props.downvoteReport(id)
	};

	changeDate = days => {
		this.setState(prevState => ({
			user: { ...prevState.user, days: days}
		}));
	};

	setFullName = (first, last)=> {
		this.setState(prevState => ({
			user: { ...prevState.user, full_name: first + " " + last}
		}));
	};

	componentDidMount() {
		this.userDate(this.props.report.user.created_at);
		this.setFullName(this.props.report.user.first_name, this.props.report.user.last_name)
	}

	render() {

		// console.log("RENDERING", this.state);
		const { id: reportId, title, votes, description, user: { id, reports_num, username, image}, comments} = this.props.report

		return (
			<Grid style={styles.mainGrid} celled>

				<Grid.Column width={1} color={'grey'}>
					<Grid centered onClick={() => this.handleUpvoteClick(reportId)}>
						<Icon style={styles.icon} name='arrow circle up'/>
					</Grid>
					<Grid centered >
						<div style={styles.icon}>
							{votes}
						</div>
					</Grid>
					<Grid centered onClick={() => this.handleDownvoteClick(reportId)}>
						<Icon style={styles.icon} name='arrow circle down'/>
					</Grid>
				</Grid.Column>
				<LazyLoad
					once={true}
					placeholder={<Image  src={image} />}
				>
					<Grid.Column width={14} style={{paddingLeft: 1}}>
						<Grid.Row>
							<Grid.Row>
								<Popup
									content={'Has ' + reports_num + ' reports'}
									key={id}
									header={this.state.user.full_name}
									trigger={<Image src={'http://www.free-avatars.com/data/media/92/animated_homer_simpson.gif'} avatar />}
								/>

								<span>
									{username}  User joined: {this.state.user.days} days ago
								</span>
							</Grid.Row>
							<Grid.Row>
								<Header as='h4'>{title}</Header>

							</Grid.Row>
							<Grid.Row>
								{description}
							</Grid.Row>
							<Grid.Row style={{paddingRight: 0, paddingLeft: 0}} >
								<Image  src={image} />
							</Grid.Row>
							<Grid.Row celled style={styles.comment}>
								<Icon name='comments'/>
								<span>
									{comments.length} Comments
								</span>
							</Grid.Row>
						</Grid.Row>

					</Grid.Column>
				</LazyLoad>

			</Grid>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		downvoteReport: (reportId) => dispatch(downvoteReport(reportId)),
		upvoteReport: (reportId) => dispatch(upvoteReport(reportId))
	}
};

export default connect(null, mapDispatchToProps)(ReportCard)