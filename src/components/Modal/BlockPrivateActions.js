import React, {Component} from 'react'
import {connect}          from 'react-redux'
import {Button, Modal, Image}    from 'semantic-ui-react'
import {withRouter}                       from "react-router-dom";
import friends from '../../assets/letsbefriends.jpg'
import {showModal, hideModal} from '../../actions'
class BlockPrivateActions extends Component {

	handleClick = (e) => {
		if (e === 'login') {
			this.props.history.push(`/login`)
		}
		else if (e === 'signup') {
			this.props.history.push(`/signup`)
		}
		this.props.hideModal()
	};

	handleClose = () => {
		this.props.hideModal()
	};

	render() {
		return (
			<>
				<Modal
					open={this.props.displayModel}
					onClose={this.handleClose}
					size='tiny'
					centered
				>
					<Modal.Header>You have to be signed in</Modal.Header>
						<Image centered size='large' src={friends} />
					<Modal.Actions>
						<Button
							floated="left"
							positive
							icon='user secret'
							labelPosition='left'
							content="Log In"
							onClick={() => this.handleClick('login')}
						/>
						<Button
							positive
							icon='user secret'
							labelPosition='right'
							content="Sign Up"
							onClick={() => this.handleClick('signup')}
						/>
					</Modal.Actions>
				</Modal>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		displayModel: state.modalReducer.displayModal
	}
};

export default connect(mapStateToProps, {showModal, hideModal})(withRouter(BlockPrivateActions))
