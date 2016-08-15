import React from 'react'
import { Route } from 'react-router'


import App from './components/App';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Legislators from './components/Legislators';

import store from './store';


export default (
  <Route path="/" component={App}>
    <Route path="home"  component={Home}/>
    <Route path="login" component={Login}/>
    <Route path="about" component={About}/>
    <Route path="legislators" component={Legislators}/>
  </Route>
)