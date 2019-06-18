import React, { Component }                   from 'react'
import { Header, Comment, Dropdown, Image, Icon } from 'semantic-ui-react'
import { connect }                            from 'react-redux'
import UserComment                            from './UserComment'


class CommentsContainer extends Component {

	renderComments = comments => {
		return comments.map(comment => {
			return <UserComment key={comment.id} comment={comment}/>
		})
	};

	render() {

		return (
		<Comment.Group>
			{/*<Header as='h3' dividing>*/}
      {/*    */}
			{/*</Header>*/}
			{this.renderComments(this.props.comments)}
		</Comment.Group>
		);
	}
}

export default CommentsContainer
