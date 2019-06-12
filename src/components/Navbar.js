import React, { Component } from 'react';
import { connect }          from 'react-redux'
import PropTypes            from "prop-types";
import { Item }             from 'semantic-ui-react'
import Logo2                from '../png/Logo2.png'
import {Link}                               from "react-router-dom";
import { logout } from '../actions'

class DesktopContainer extends Component {
	state = {

	};

	handleLogout = () => {
		this.props.logout()
		localStorage.removeItem('token');
	};

	render() {
		return (
			<div className="ui top fixed borderless fluid huge menu">
				<div className="ui container">
					<Item.Image size='tiny' src={Logo2} />
					{/*<a className="header item">Dont Mess</a>*/}
					{/*<a className="active item">Reports</a>*/}
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className="ui dropdown item" tabIndex="0">
						Dropdown <i className="dropdown icon" />
						<div className="menu" tabIndex="-1">
							<div className="item">Something</div>
							<div className="ui divider"/>
							<div className="item">Something</div>
						</div>
					</a>
					{!this.props.user ?
						(
							<div className="right menu">
							<Link className={'item'} to={'/login'}>
								Login
							</Link>
							<Link className={'item'} to={'/signup'}>
								Signup
							</Link>
						</div>
						)
						:
						(
							<Link className={'item'} onClick={this.handleLogout} to={'/'}>
								Logout
							</Link>
						)
					}
				</div>
			</div>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node
};

const mapStateToProps = state => {
	return {
		user: state.userReducer.user
	}
};

export default connect(mapStateToProps, { logout })(DesktopContainer)
