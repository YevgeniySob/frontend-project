import React, { Component, Fragment } from "react";
import { Grid } from 'semantic-ui-react'
import NewReportBox from '../components/NewReportBox'
import BoxTwoContainer from '../components/BoxTwoContainer'

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
					<BoxTwoContainer/>
				</Grid.Row>

			</Fragment>

		);
	}
}
