import React, {Component} from 'react'
import {Comment}          from 'semantic-ui-react'
import {connect}          from 'react-redux'
import UserComment        from './UserComment'

class CommentsContainer extends Component {

	sortedComments = comments => {
		if (this.props.sortBy === 'date') {
			return comments.sort((a, b) => {
				let dateA = a.created_at;
				let dateB = b.created_at;
				if (dateA < dateB) {
					return -1;
				}
				if (dateA > dateB) {
					return 1;
				}
				else {
					return 0
				}
			})
		}
		else if (this.props.sortBy === 'popularity') {
			return comments.sort((a, b) => {
				return b.points - a.points;
			});
		}
	};

	renderComments = comments => {
		return this.sortedComments(comments).map(comment => {
			return <UserComment reportId={this.props.reportId} key={comment.id} comment={comment}/>
		})
	};

	render() {
		return (
			<Comment.Group>
				{this.renderComments(this.props.comments)}
			</Comment.Group>
		);
	}
}

const mapStateToProps = state => {
	return {
		comments: state.reportReducer.report.comments,
		sortBy:   state.reportReducer.sortBy
	}
};

export default connect(mapStateToProps)(CommentsContainer)
