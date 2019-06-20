import React, {Component, Fragment} from 'react'
import {Marker, Popup}              from 'react-leaflet'

class ReportMarker extends Component {
	render() {
		const {report_geolocation: {latitude, longitude}, description, title} = this.props.report;
		return (
			<Fragment>
				<Marker
					position={[latitude, longitude]}
					draggable={false}
					icon={this.props.icon}
				>
					<Popup>
						{title}
						<br />
						{description}
					</Popup>
				</Marker>
			</Fragment>
		);
	}
}

export default ReportMarker
