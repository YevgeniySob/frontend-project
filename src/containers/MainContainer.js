import React, {Component, Fragment} from 'react'
import { connect }        from 'react-redux'
import { getReports }       from '../actions'
import ReportContainer from './ReportContainer'
import SettingsContainer from './SettingsContainer'
import { Container, Grid } from "semantic-ui-react";

const styles = {
	noMargin: {
		margin: 0
	},
	settings: {
		paddingLeft: 24,
		paddingRight: 0,
		paddingTop: 0,
		paddingBottom: 0
	}
};

class MainContainer extends Component {

	state = {
		fetching: true
	};

	componentDidMount() {
		console.log('FETCHING...');
		fetch('http://localhost:3000/reports')
			.then(r => r.json())
			.then(reports => {
				this.props.getReports(reports)
				this.setState({
					fetching: false
				})
			}
			)
	}

	render() {
		return (
			<Fragment>
				<Container  style={{marginTop: 100, width: '70%'}}>
					<Grid stackable padded style={{width: "100%", paddingRight: 0}}>
						<Grid.Column only="computer" width={10} style={{padding: 0}}>
							{!this.state.fetching && <ReportContainer />}

						</Grid.Column>
						<Grid.Column only="computer" width={6} style={styles.settings}>
							<SettingsContainer />
						</Grid.Column>
					</Grid>
				</Container>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getReports: (reports) => dispatch(getReports(reports))
	}
};

export default connect(null, mapDispatchToProps)(MainContainer)
