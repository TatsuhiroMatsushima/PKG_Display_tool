import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import {Afalse ,Boadm,Dsm,Pages,Ptm,Pts,Top} from './components/index'

export default function App() {

  const f = false
  return (
    <Router>
      <div>
        <Pages /><hr />
        <Route exact path='/' component={Top} />
        <Route exact path='/dsm' component={Dsm} />
        <Route exact path='/boadm' component={Boadm}/>
        <Route exact path='/pts' component={Pts}/>
        <Route exact path='/ptm' component={Ptm}/>
        
        <Route exact path="/Afalse">
          {/* fがtrueの時？ falseの時: */}
          {f ? <Redirect to="/" /> : <Afalse />}
        </Route>
        {/* <Route exact path="/dsm/result" component={Dsmresult}/> */}
        <hr/>
      </div>
    </Router>
  );
}