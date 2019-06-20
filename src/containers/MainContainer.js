import React, {Component, Fragment}             from 'react'
import {connect}                                from 'react-redux'
import {getReports, byState, updateGeolocation} from '../actions'
import ReportContainer                          from './ReportContainer'
import SettingsContainer                        from './SettingsContainer'
import {Container, Grid}                        from "semantic-ui-react";
import {CircleLoader}                             from "react-spinners";

const styles = {
	noMargin: {
		margin: 0
	},
	settings: {
		paddingLeft:   50,
		paddingRight:  0,
		paddingTop:    0,
		paddingBottom: 0
	}
};

class MainContainer extends Component {

	componentDidMount() {
		window.scrollTo(0,0)
	}

	render() {
		return (
			<Fragment>
				<Container style={{marginTop: 100}}>
					<Grid stackable padded style={{width: "100%", paddingRight: 0}}>
						<Grid.Column only="computer" width={10} style={{paddingRight: 40, paddingTop: 0}}>
							{this.props.fetching ?
								<Grid centered>
									<CircleLoader
										centered
										color={'#123abc'}
										loading={this.props.loading}
										size={200}
									/>
								</Grid>
								:
								<ReportContainer/>
							}

						</Grid.Column>
						<Grid.Column only="computer" width={6} style={styles.settings}>
							<SettingsContainer/>
						</Grid.Column>
					</Grid>
				</Container>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		fetching:    state.reportReducer.fetching,
	}
};

export default connect(mapStateToProps, {getReports, byState, updateGeolocation})(MainContainer)
