import React from 'react';
import App from '../components/App';  
import LoginComponent from '../components/common/LoginComponent';
import { Switch, Route } from 'react-router-dom';

export const HomeRoutes = () => (
    <Switch>
      <Route path='/' component={LoginComponent}/>
      <Route path='/login' component={LoginComponent}/>
    </Switch>
  )