import React, { Component }                                       from 'react';
import { connect }                                                from 'react-redux'
import PropTypes                                                  from "prop-types";

class DesktopContainer extends Component {
	state = {};


	render() {

		return (
			<div className="ui top fixed borderless fluid huge menu">
				<div className="ui container">
					<a className="header item">Dont Mess</a>
					<a className="active item">Reports</a>
					<a className="ui dropdown item" tabIndex="0">
						Dropdown <i className="dropdown icon" />
						<div className="menu" tabIndex="-1">
							<div className="item">Something</div>
							<div className="ui divider"/>
							<div className="item">Something</div>
						</div>
					</a>
					<div className="right menu">
						<a className="item">Login</a>
						<a className="item">Signup</a>
					</div>
				</div>
			</div>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node
};

const mapDispatchToProps = dispatch => {
	return {

	}
};

export default connect(null, mapDispatchToProps)(DesktopContainer)
