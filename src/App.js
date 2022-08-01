import React from 'react';
import './index.css';
import Navbar from './Navbar';
import TodoList from './TodoList';
import Pomodoro from './Pomodoro';
import Support from './Support';
import About from './About';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Pomodoro' element={<Pomodoro/>} />
          <Route path='/TodoList' element={<TodoList/>} />
          <Route path='/Support' element={<Support/>} />

        </Routes>
      </div>
          
      </div>
  );
}

export default App;