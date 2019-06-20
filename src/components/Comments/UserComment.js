import React, {PureComponent}           from 'react'
import {Comment, Icon}                  from 'semantic-ui-react'
import {connect}                        from 'react-redux'
import {showModal, downvoteComment, upvoteComment} from '../../actions'

class UserComment extends PureComponent {

	handleClick = e => {
		if (this.props.user.id === 0) {
			this.props.showModal()
		} else {
			if (e.target.className.includes('up')) {
				this.props.upvoteComment(this.props.reportId, this.props.comment.id)
			}
			else if (e.target.className.includes('down') && this.getPoints() >= 1) {
				this.props.downvoteComment(this.props.reportId, this.props.comment.id)
			}
		}
	};

	getPoints = () => {
		return this.props.comments.find(comment => comment.id === this.props.comment.id).points
	};

	render() {
		const {content, username, created_at} = this.props.comment
		return (
			<Comment>
				<Icon onClick={this.handleClick} name='angle up'/>
				<Icon onClick={this.handleClick} name='angle down'/>
				{this.getPoints()} points
				<Comment.Content>
					<Comment.Author as='a'>{username}</Comment.Author>
					<Comment.Metadata>
						<div>On {created_at.slice(5, 10)}, At  {created_at.slice(11, 16)}</div>
					</Comment.Metadata>
					<Comment.Text>{content}</Comment.Text>

				</Comment.Content>
			</Comment>
		);
	}
}

const mapStateToProps = state => {
	return {
		comments: state.reportReducer.report.comments,
		user: state.userReducer.user
	}
};

export default connect(mapStateToProps, {showModal, downvoteComment, upvoteComment})(UserComment);
