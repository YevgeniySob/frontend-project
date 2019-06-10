import React, { Component, Fragment }   from 'react'
import { Grid, Button, Image, Segment } from 'semantic-ui-react'
import { connect }                      from 'react-redux'

class NewReportBox extends Component {
	render() {
		return (
			<Grid.Column>
				<Grid.Row>
					<Image src={'https://picsum.photos/id/237/300/50'}>

					</Image>
				</Grid.Row>
				<Grid.Row>
					2
				</Grid.Row>
				<Grid.Row>
					<Button fluid inverted color='red'>
						New Report
					</Button>
				</Grid.Row>

			</Grid.Column>
		);
	}
}

const mapStateToProps = state => {
	return {

	}
};

const mapDispatchToProps = dispatch => {
	return {

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReportBox)
