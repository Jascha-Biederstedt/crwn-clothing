import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Shop from './components/Shop/Shop';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
