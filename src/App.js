import React from 'react';
import {
  BrowserRouter as Router, Route, Link,
  Redirect
} from 'react-router-dom';

import './App.css';
import Pages from './Pages'
import Dsm from './Dsm';
import Top from './Top'
import Afalse from './Afalse'

export default function App() {

  const f = false
  return (
    <Router>
      <div>
        <Pages /><hr />
        <Route exact path='/dsm' component={Dsm} />
        <Route exact path='/' component={Top} />
        <Route exact path="/Afalse">
        {f ? <Redirect to="/" /> : <Afalse />}
        </Route>
      </div>
    </Router>
  );
}