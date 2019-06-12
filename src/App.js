import React, { Component } from 'react';
import './App.css';
import { Route, Switch }    from 'react-router-dom';
import Navbar               from './components/Navbar'
import Login                from './components/Forms/LoginForm'
import Signup               from './components/Forms/SignupForm'
import MainContainer        from './containers/MainContainer'
import ReportForm        from './components/Forms/Report/ReportForm'
import { connect }          from 'react-redux'
import { autoLogin }        from './actions'
class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    // const isLoggedIn = this.props
    if (token && !this.props.user) {
      // how can we make this work?
      // this.props.autoLogin()
      console.log('should hit this');
      fetch('http://localhost:3000/auto_login', {
        headers: {
          Authorization: token
        }
        // method: 'GET'
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
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/new-report" component={ReportForm} />
          <Route path="/" component={MainContainer} />
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

export default connect(mapStateToProps, { autoLogin })(App);
