import React, { Component } from 'react';
import './App.css';
import { Route, Switch }  from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignIn from './components/Login'
import SignUp from './components/Signup'
import MainContainer from './containers/MainContainer'
import ReportContainer from './containers/ReportContainer'
import RootPage from './components/RootPage'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={SignIn}/>
          <Route path="/" component={MainContainer} />
        </Switch>

      </React.Fragment>
    )
  }
}

export default App;
