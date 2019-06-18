import React, {Component}                      from 'react';
import './App.css';
import {Route, Switch}                         from 'react-router-dom';
import Navbar                                  from './components/Navbar'
import Login                                   from './components/Forms/LoginForm'
import Signup                                  from './components/Forms/SignupForm'
import MainContainer                           from './containers/MainContainer'
import ReportForm                              from './components/Forms/Report/ReportForm'
import ReportShow                              from './components/ReportShow'
import NotFound                                from './nonexistent/NotFound'
import {connect}                               from 'react-redux'
import {fetchingTrue, autoLogin, getReports, updateGeolocation} from './actions'
import {userGeolocation}                       from "./UserGeolocation";
import ReportsMap                              from './components/map/ReportsMap'

class App extends Component {

	componentDidMount() {
		this.props.fetchingTrue();
		userGeolocation(this.props.updateGeolocation, this.props.getReports);

		const token = localStorage.getItem('token');
		if (token && !this.props.user) {
			fetch('http://localhost:3000/auto_login', {
				headers: {
					Authorization: token
				}
			})
				.then(res => res.json())
				.then(data => {
					this.props.autoLogin(data)
				})
		}
	};

	render() {
		return (
			<React.Fragment>
				<Navbar/>
				<Switch>
					<Route path="/signup" component={Signup}/>
					<Route path="/login" component={Login}/>
					<Route path="/new-report" component={ReportForm}/>
					<Route path="/report/:id" component={ReportShow}/>
					<Route path="/map" component={ReportsMap}/>
					<Route exact path="/" component={MainContainer}/>
					<Route component={NotFound}/>
				</Switch>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		// isLoggedIn: !!state.usersReducer.user,
		user: state.userReducer.user
	}
};

export default connect(mapStateToProps, {autoLogin, updateGeolocation, getReports, fetchingTrue})(App);
