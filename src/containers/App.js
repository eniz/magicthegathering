import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CardDetail from './CardDetail';
import Header from '../components/Header';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={CardDetail} />
      </Switch>
    </Fragment>
  )
}
