import React, { Component }   from 'react'
import { Grid, Button, Image, Dropdown } from 'semantic-ui-react'
import { connect }                      from 'react-redux'
import { stateList } from '../state'
import { byState, fetchingTrue, fetchingFalse } from '../actions'
import {Link}                               from "react-router-dom";

class NewReportBox extends Component {

	state = {
		state: 'State'
	};

	handleChange = (e, {value}) => {
		this.props.byState(value);
	};

	render() {
		// console.log("STATE", this.state.state);
		return (
			<Grid.Column>
				<Grid.Row>
					<Image src={'https://picsum.photos/id/237/300/50'} />
				</Grid.Row>
				<Grid.Row>
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
						<Button fluid inverted color='red'>
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

export default connect(mapStateToProps, { byState, fetchingTrue, fetchingFalse })(NewReportBox)
