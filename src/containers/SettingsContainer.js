import React, { Component, Fragment } from "react";
import { Header, Popup, Grid, Image, Icon } from 'semantic-ui-react'
import NewReportBox from '../components/NewReportBox'
const styles = {
	mainGrid: {
		margin: 0
	},
	box: {
		marginBottom: 30,
		boxShadow: 3
	}
};

export default class SettingsContainer extends Component {
	render() {
		return (
			<Fragment>
				<Grid.Row styles={styles.box}>

						<NewReportBox />

				</Grid.Row>

				<Grid.Row styles={styles.box}>
					Box 2
				</Grid.Row>
				<Grid.Row styles={styles.box}>
					Box 3
				</Grid.Row>
			</Fragment>

		);
	}
}
