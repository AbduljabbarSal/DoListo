import React from 'react';
import './index.css';
import Navbar from './Navbar';
import TodoList from './TodoList';
import Pomodoro from './Pomodoro';
import Support from './Support';
import About from './About';
import {Route, Routes, Navigate} from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navbar/>

      <div className="App">
      
        <Routes>
        <Route path="/" element={<Navigate replace to="/About" />} />
        <Route path="/DoListo" element={<Navigate replace to="/About" />} />
        <Route path = "/About" element={<About></About>}></Route>
        <Route path = "/TodoList" element={<TodoList></TodoList>}></Route>
        <Route path = "/Pomodoro" element={<Pomodoro></Pomodoro>}></Route>
        <Route path = "/Support" element={<Support></Support>}></Route>
        </Routes>

      </div>
    </>
  );
}

export default App;