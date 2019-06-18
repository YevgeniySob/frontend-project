import React, {Component, Fragment} from 'react'
import {RingLoader}                 from 'react-spinners';
import {connect}                    from 'react-redux'
import {Modal, Grid, Button}        from "semantic-ui-react";
import ReportsMap                   from './map/ReportsMap'

class BoxTwoContainer extends Component {

	state = {
		modalOpen: false
	};

	handleOpen = () => this.setState({modalOpen: true});

	handleClose = () => this.setState({modalOpen: false});

	render() {
		console.log('fetching', this.props.fetching);
		return (
			<Fragment>
				{this.props.fetching ?
					<RingLoader
						color={'#123abc'}
						loading={this.props.loading}
						size={'25'}
					/>
					:
					<Modal
						trigger={
							<Button
								onClick={this.handleOpen}
								fluid
								color='black'
							>

								Open Map
							</Button>}
						open={this.state.modalOpen}
						onClose={this.handleClose}
						size='large'
						centered
					>
						<ReportsMap/>
					</Modal>
				}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		fetching: state.reportReducer.fetching
	}
};

export default connect(mapStateToProps)(BoxTwoContainer)
