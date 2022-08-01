import React from 'react';
import './index.css';
import Navbar from './Navbar';
import TodoList from './TodoList';
import Pomodoro from './Pomodoro';
import Support from './Support';
import About from './About';
import {HashRouter, Route, Switch} from "react-router-dom";

function App() {
  const path = process.env.REACT_APP_FOR_PATH;

  return (
    <div>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar></Navbar>
      <Switch>
        <Route path="/" component={About} />
        <Route path="/About" component={About} />
        <Route path="/TodoList" component={TodoList} />
        <Route path="/Support" component={Support} />
        <Route path="/Pomodoro" component={Pomodoro} />
      </Switch>
      </div>
    </HashRouter>
  </div>
  );
}

export default App;