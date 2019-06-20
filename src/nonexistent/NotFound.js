import React, {Component} from 'react'
import {Grid, Image}                       from "semantic-ui-react";
import notFound from '../assets/404-not-found.jpg'

class NotFound extends Component {
	render() {
		return (
			<Grid centered >
				<Image
					fluid
					src={notFound}/>
			</Grid>
		);
	}
}

export default NotFound
