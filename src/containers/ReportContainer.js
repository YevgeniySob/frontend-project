import React, {Component} from 'react'
import ReportCard         from '../components/ReportCard'
import {connect}          from 'react-redux'
import LazyLoad           from 'react-lazyload'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const LoaderExampleLoader = () => (
	<Segment>
		<Dimmer active inverted>
			<Loader inverted content='Loading' />
		</Dimmer>

		<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
	</Segment>
);

class ReportContainer extends Component {
	render() {
		console.log('FETCHING STATE OF REPORT CONTAINER: ', this.props.fetching)
		return (
			<div>
				{this.props.reports.length === 0 && <div>There are no reports in your state yet</div>}
				{this.props.reports.map(report => (
					<LazyLoad
						key={report.id}
						placeholder={<LoaderExampleLoader />}
						height={100}
						offset={[-100, 100]}
					>
						<ReportCard key={report.id} report={report}/>
					</LazyLoad>
					)
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		reports: state.reportReducer.reports,
		fetching: state.reportReducer.fetching
	}
};

export default connect(mapStateToProps)(ReportContainer)