import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Shop from './components/Shop/Shop';
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
