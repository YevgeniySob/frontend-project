import React, { Component } from 'react';
import {Grid, Header}       from "semantic-ui-react";

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 100,
		marginBottom: 0
	}
};

class Success extends Component{
	render(){

		return(
			<Grid centered >
				<div className="ui middle aligned center aligned grid" style={styles.form}>
					<div className="column">
						<h2 className="ui teal image header">
							{/*<img src="assets/images/logo.png" className="image" />*/}
							<div className="content">
								<Header as='h1'>
									Details are Successfully saved
								</Header>
							</div>
						</h2>
					</div>
				</div>
			</Grid>
		)
	}
}

export default Success;
