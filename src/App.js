import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles/App.css';
import { Boadm, Dsm, Pages, Ptm, Pts } from './components/index'

export default function App() {

 return (
   <Router basename={process.env.PUBLIC_URL}>
     <div>
       <div className="title">PKG位置表示ツール</div>
       <Pages /><hr />
       <Route exact path='/dsm' component={Dsm} />
       <Route exact path='/boadm' component={Boadm} />
       <Route exact path='/pts' component={Pts} />
       <Route exact path='/ptm' component={Ptm} />

       <hr />
     </div>
   </Router>
 );

}