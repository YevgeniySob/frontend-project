import React, { Component, Fragment } from "react";
import { Grid } from 'semantic-ui-react'
import NewReportBox from '../components/NewReportBox'
const styles = {
	mainGrid: {
		margin: 0
	},
	box: {
		marginBottom: 30
	}
};

export default class SettingsContainer extends Component {
	render() {
		return (
			<Fragment>
				<Grid.Row style={styles.box}>

						<NewReportBox fetching={this.props.fetching}/>

				</Grid.Row>

				<Grid.Row style={styles.box}>
					Box 2
				</Grid.Row>
				<Grid.Row style={styles.box}>
					Box 3
				</Grid.Row>
			</Fragment>

		);
	}
}
