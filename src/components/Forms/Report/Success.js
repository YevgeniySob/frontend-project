import React, { Component }           from 'react';
import { Grid } from "semantic-ui-react";

const styles = {
	form: {
		// paddingTop: 500,
		width: '400px',
		marginTop: 200,
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
								<h1>Details are Successfully saved</h1>
							</div>
						</h2>
					</div>
				</div>
			</Grid>
		)
	}
}

export default Success;
