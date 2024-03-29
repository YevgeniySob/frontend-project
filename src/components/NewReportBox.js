import React, { Component }   from 'react'
import { Grid, Button, Image, Dropdown } from 'semantic-ui-react'
import { connect }                      from 'react-redux'
import { stateList } from '../state'
import { byState, fetchingTrue, fetchingFalse, showModal } from '../actions'
import {Link}                               from "react-router-dom";
import sign from '../assets/sign.jpg'

class NewReportBox extends Component {

	state = {
		state: 'State'
	};

	handleChange = (e, {value}) => {
		this.props.byState(value);
	};

	render() {
		return (
			<Grid.Column>
				<Grid.Row>
					<Image src={sign} />
				</Grid.Row>
				<Grid.Row style={{marginBottom: 20}}>
					Search By State:
					<Dropdown
						placeholder={this.state.state}
						fluid
						search
						selection
						options={stateList}
						onChange={this.handleChange}
					/>
				</Grid.Row>
				<Grid.Row>
					<Link to={'/new-report'}>
						<Button
							fluid
							// inverted
							color='black'
						>
							New Report
						</Button>
					</Link>
				</Grid.Row>
			</Grid.Column>
		);
	}
}

const mapStateToProps = state => {
	return {
		fetching: state.reportReducer.fetching
	}
};

export default connect(mapStateToProps, { showModal, byState, fetchingTrue, fetchingFalse })(NewReportBox)
