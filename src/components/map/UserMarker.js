import React, {Component, Fragment} from 'react'
import {Marker}                     from 'react-leaflet'

class UserMarker extends Component {
	render() {
		console.log('USER MARKER', this.props.userPosition)
		return (
			<Fragment>
				<Marker
					position={this.props.userPosition}
					draggable={false}
					icon={this.props.icon}
				/>
			</Fragment>
		);
	}
}

export default UserMarker
