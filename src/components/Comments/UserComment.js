import React, { PureComponent }             from 'react'
import { Header, Comment, Grid, Image, Icon } from 'semantic-ui-react'
import { connect }                          from 'react-redux'

class UserComment extends PureComponent {
	render() {
		const {content, username, created_at} = this.props.comment
		return (
			<Comment>
				<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
				<Comment.Content>
					<Comment.Author as='a'>{username}</Comment.Author>
					<Comment.Metadata>
						<div>{created_at.slice(0, 10)}</div>
					</Comment.Metadata>
					<Comment.Text>{content}</Comment.Text>

				</Comment.Content>
			</Comment>
		);
	}
}

export default UserComment
