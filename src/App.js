import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'


export default class App extends Component {
  render() {
    return (
     <Router> 
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/#/*" component={Home} /> */}
            
          </Switch>
      </Router>
    )
  }
}
