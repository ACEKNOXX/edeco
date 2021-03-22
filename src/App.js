import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Vendors from './components/Vendors'
import PageNotFound from './components/PageNotFound.js'

export default class App extends Component {
  render() {
    return (
     <Router> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/#/*" component={PageNotFound} />
            <Route path="/Stats" component={Statistics} />
            <Route  path="/Vendors" component={Vendors} />
          
            
          </Switch>
      </Router>
    )
  }
}
