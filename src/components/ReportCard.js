import React, {PureComponent}             from 'react'
import {connect}                          from 'react-redux'
import {Header, Popup, Grid, Image, Icon} from 'semantic-ui-react'
import LazyLoad                           from 'react-lazyload'
import {downvoteReport, upvoteReport, updateCurrentReport, showModal}     from '../actions'
import {withRouter}                       from "react-router-dom";
import {upvoteFetch, downvoteFetch} from '../adapter/adapter'

const styles = {
	mainGrid: {
		marginBottom: 10,
		marginTop:    0,
		background: 'white'
	},
	icon:     {
		padding:      0,
		marginRight:  0,
		marginBottom: 5,
		marginTop:    5
	},
	comment:  {
		boxShadow: 0
	}
};

class ReportCard extends PureComponent {

	state = {
		user: {
			userCreated:     '',
			reportSubmitted: '',
			full_name:       '',
			content:         ''
		}
	};

	userDate = date => {
		let date1      = new Date();
		let date2      = new Date(date.slice(0, 10));
		const diffTime = date1.getTime() - date2.getTime();
		const diff     = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		this.changeDate(diff)
	};

	reportDate = date => {
		let date1      = new Date();
		let date2      = new Date(date);
		const diffTime = date1.getTime() - date2.getTime();
		const diff     = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		this.setState(prevState => ({
			user: {...prevState.user, reportSubmitted: diff}
		}));
	};

	handleCardClick = e => {
		if (e.target.nodeName !== 'I') {
			const id = this.props.report.id;
			this.props.updateCurrentReport(id);
			this.props.history.push(`/report/${id}`)
		}
	};

	handleUpvoteClick = id => {
		if (this.props.user.id === 0) {
			this.props.showModal()
		} else {
			upvoteFetch(id)
			this.props.upvoteReport(id)
		}
	};

	handleDownvoteClick = (id, votes) => {
		if (this.props.user.id === 0) {
			this.props.showModal()
		} else {
			if (votes > 1) {
				downvoteFetch(id)
				this.props.downvoteReport(id)
			}
		}
	};

	changeDate = days => {
		this.setState(prevState => ({
			user: {...prevState.user, userCreated: days}
		}));
	};

	setFullName = (first, last) => {
		this.setState(prevState => ({
			user: {...prevState.user, full_name: first + " " + last}
		}));
	};

	componentDidMount() {
		this.userDate(this.props.report.user.created_at);
		this.reportDate(this.props.report.date);
		this.setFullName(this.props.report.user.first_name, this.props.report.user.last_name)
	}

	render() {

		const {id: reportId, title, votes, image, description, user: {id, reports_num, username}, comments} = this.props.report;

		return (
			<Grid
				style={styles.mainGrid}
				className={'report-card'}
				onClick={this.handleCardClick}
			>
				<Grid.Column width={1} color={'grey'} className={'left-area'}>
					<Grid centered onClick={() => this.handleUpvoteClick(reportId)}>
						<Icon style={styles.icon} name='arrow circle up'/>
					</Grid>
					<Grid centered>
						<div style={styles.icon}>
							{votes}
						</div>
					</Grid>
					<Grid centered onClick={() => this.handleDownvoteClick(reportId, votes)}>
						<Icon style={styles.icon} name='arrow circle down'/>
					</Grid>
				</Grid.Column>
				<LazyLoad
					once={true}
					placeholder={<Image src={image}/>}
				>
					<Grid.Column width={14} style={{paddingLeft: 1}}>
						<Grid.Row>
							<Grid.Row>
								<Popup
									content={'Total reports: ' + reports_num + " - " + username + " joined: " + this.state.user.userCreated + ' days ago'}
									key={id}
									header={this.state.user.full_name}
									trigger={<Image src={'https://gif-avatars.com/img/45x45/lew.gif\n' +
									'\n'} avatar/>}
								/>
								<span>
									Report submitted: {this.state.user.reportSubmitted}
									{this.state.user.reportSubmitted === 1 ? ' day ago' : ' days ago'}
								</span>
							</Grid.Row>
							<Grid.Row>
								<Header as='h2'>{title}</Header>
							</Grid.Row>
							<Grid.Row>
								{description}
							</Grid.Row>
							<Grid.Row style={{paddingRight: 0, paddingLeft: 0}}>
								<Image src={image}/>
							</Grid.Row>
							<Grid.Row style={styles.comment}>
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

const mapStateToProps = state => {
	return {
		user: state.userReducer.user
	}
};

export default connect(mapStateToProps, {updateCurrentReport, downvoteReport, upvoteReport, showModal})(withRouter(ReportCard))
