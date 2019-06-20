import React, {Component}              from 'react'
import {Map, TileLayer} from 'react-leaflet'
import L                               from 'leaflet'
import {connect}                       from 'react-redux'
import './Map.css';
// import state                           from '../../state'
import ReportMarket                    from './ReportMarker'
import UserMarker                      from './UserMarker'

export const userIcon = new L.Icon({
	iconUrl:       require('../../assets/userIcon.png'),
	iconRetinaUrl: require('../../assets/userIcon.png'),
	iconAnchor:    [10, 10],
	// popupAnchor:   [10, -44],
	iconSize: [30,30]
	// shadowUrl:     '../assets/marker-shadow.png',
	// shadowSize:    [68, 95],
	// shadowAnchor:  [20, 92],
});

export const reportIcon = new L.Icon({
	iconUrl:       require('../../assets/garbage-bag.png'),
	iconRetinaUrl: require('../../assets/garbage-bag.png'),
	iconAnchor:    [15, 20],
	// popupAnchor:   [10, -44],
	iconSize: [40,40]
	// shadowUrl:     '../assets/marker-shadow.png',
	// shadowSize:    [68, 95],
	// shadowAnchor:  [20, 92],
});

const styles = {
	width:  '100%',
	height: '80vh'
};

class ReportsMap extends Component {
	state = {
		lat:  51.505,
		log:  -0.09,
		zoom: 13
	};

	handleClick = () => {

	};

	renderReports = () => {
		// debugger
		console.log('rendering report on map', this.props.reports);
		return this.props.reports.map(report => {
			if (report.report_geolocation) {
				return <ReportMarket
					key={report.id}
					report={report}
					icon={reportIcon}
				/>
			}
			else {
				return null
			}
		})
	};
	//
	// getStateProps = () => {
	// 	const stateObj = state.find(state => state.value === this.props.state)
	// 	return {
	// 		stateObj.latitude,
	// 		stateObj.longitude
	// 	}
	// };

	componentDidMount() {

	};

	render() {
		// console.log('map')
		// console.log(this.props.reports)
		const userPosition = [this.props.lat, this.props.log];
		// const StatePosition = [this.props.lat, this.props.log];
		return (
			<div>
				<Map
					style={styles}
					id='map'
					center={userPosition}
					zoom={this.state.zoom}
				>
					<TileLayer
						attribution={"TRASH"}
						url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png'
						minZoom={3}
						maxZoom={20}
					/>
					<UserMarker userPosition={userPosition} icon={userIcon} />
					{this.renderReports()}
				</Map>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		reports: state.reportReducer.reports,
		lat:     state.userReducer.geolocation.lat,
		log:     state.userReducer.geolocation.log
		// state: state.userReducer.geolocation.state
	}
};

export default connect(mapStateToProps)(ReportsMap)
