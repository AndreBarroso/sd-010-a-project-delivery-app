import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import CustomerCheckout from '../pages/CustomerCheckout';
import FinishedOrder from '../pages/FinishedOrder';

export default function Rout() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/customer/finished" component={ FinishedOrder } />
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}
