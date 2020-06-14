import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import pick from 'lodash.pick';

import useLoggedIn from '../hooks/useLoggedIn';

import AccountPage from './pages/AccountPage';
import ErrorBar from './ErrorBar';
import HomePage from './pages/HomePage';
import BadgesPage from './pages/BadgesPage';
import IssuersPage from './pages/IssuersPage';
import LoginBar from './LoginBar';
import Menu from './Menu';

const App = () => {
  const loggedIn = useLoggedIn();
  return (
    <>
      <LoginBar />
      <ErrorBar />
      <Switch>
        <Route path="/home" render={() => <HomePage/>} />
        <Route path="/badges" render={() => <BadgesPage/>} />
        <Route path="/issuers/:issuerId?/:issuerCard?" render={() => <IssuersPage/>} />
        <Route path="/account" render={() => <AccountPage/>} />
        {loggedIn ? <Redirect to="/badges" /> : <Redirect to="/home" /> }
      </Switch>
      <Menu />
    </>
  );
};

export default App;
