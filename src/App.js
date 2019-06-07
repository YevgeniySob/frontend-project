import React, { Component } from 'react';
import './App.css';
import { Route, Switch }  from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/Signup'
import MainContainer from './containers/MainContainer'


class App extends Component {

  render() {
    console.log('working')

    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route path="/main" component={MainContainer} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={null} />
        </Switch>

      </React.Fragment>
    )
  }
}


export default App;
