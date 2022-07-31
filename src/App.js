import React from 'react';
import './index.css';
import Navbar from './Navbar';
import TodoList from './TodoList';
import Pomodoro from './Pomodoro';
import Support from './Support';
import About from './About';
import {Route, Routes, Navigate} from 'react-router-dom';
//make all routes start with /DoListo . not gon wrok
function App() {
  
  return (
    <>
      <Navbar/>

      <div className="App">
      
        <Routes>
        <Route path="/" element={<Navigate replace to="/About" />} />
        <Route path="/DoListo" element={<Navigate replace to="/About" />} />
        <Route path = "/About" element={<Navigate replace to="/About"/>}></Route>
        <Route path = "/TodoList" element={<Navigate replace to="/TodoList"/>}></Route>
        <Route path = "/Pomodoro" element={<Navigate replace to="/Pomodoro"/>}></Route>
        <Route path = "/Support" element={<Navigate replace to="/Support"/>}></Route>
        </Routes>

      </div>
    </>
  );
}

export default App;