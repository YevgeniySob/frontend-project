import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux'
import {RingLoader}                 from 'react-spinners';
import {getReport, updateReport}    from '../actions'

const waitForReports = (WaitedComponent) => {

	class WaitingComponent extends Component {

		// findReport = id => {
		// 	if (this.props.reports.find(report => report.id === id)) {
		// 		return this.props.reports.find(report => report.id === id)
		// 	} else {
		// 		this.props.getReport(id);
		// 	}
		// };

		componentDidMount() {
			const id       = parseInt(this.props.match.params.id);
			const {report} = this.props;

			if (!report) {
				this.props.getReport(id)
			}
			else if (report.id === id) {
				console.log('do nothing')
			}
			else if (report.id !== id) {
				this.props.updateReport(id)
			}
			// if (!this.props.report) {
			// 	this.props.getReport(id)
			// } else {
			// 	this.props.updateReport(id)
			// }
		}

		render() {
			console.log('this report props', this.props);

			return (
				<Fragment>
					{this.props.loading || !this.props.report ?
						<div style={{marginTop: 200, marginLeft: 300}} className='sweet-loading'>
							<RingLoader
								color={'#123abc'}
								loading={this.props.loading}
							/>
						</div>
						:
						<WaitedComponent {...this.props} />
					}
				</Fragment>
			);
		}
	}

	const mapStateToProps = state => {
		return {
			loading: state.reportReducer.fetching,
			report:  state.reportReducer.report
		}
	};

	return connect(mapStateToProps, {getReport, updateReport})(WaitingComponent)
};

export default waitForReports

