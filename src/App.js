import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Home from './pages/TodoList';
import TodoList from './pages/TodoList';
import Pomodoro from './pages/Pomodoro';
import Support from './pages/Support';
import About from './pages/About';

function App(props,state) {
  let Component;
  switch(window.location.pathname){
    
    case "/":
      Component = About
      break
    case "/TodoList":
      Component = TodoList
      break
    case "/Pomodoro":
      Component = Pomodoro
      break
    case "/Support":
      Component = Support
      break
    case "/About":
      Component = About
      break  
  }
  
  return (
    <div className="App">

      <Navbar/>
      <Component></Component>
    </div>
  );
}

export default App;