import React from 'react';
import './index.css';
import Navbar from './Navbar';
import TodoList from './TodoList';
import Pomodoro from './Pomodoro';
import Support from './Support';
import About from './About';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const path = process.env.REACT_APP_FOR_PATH;

  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path={process.env.REACT_APP_FOR_PATH + '/'} element={<About/>} />
          <Route path= {process.env.REACT_APP_FOR_PATH + '/DoListo'} element={<About/>} />
          <Route path= {process.env.REACT_APP_FOR_PATH + '/About' }element={<About/>} />
          <Route path= {process.env.REACT_APP_FOR_PATH + '/Pomodoro'} element={<Pomodoro/>} />
          <Route path= {process.env.REACT_APP_FOR_PATH + '/TodoList'} element={<TodoList/>} />
          <Route path= {process.env.REACT_APP_FOR_PATH + '/Support' }element={<Support/>} />

        </Routes>
      </div>
          
      </div>
  );
}

export default App;