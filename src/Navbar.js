import React from 'react';

const Navbar = () => {
  return (
      <div className="sideNavbar">
        <a href="/TodoList" className='list'>ToDoList </a>
        <a href="/Pomodoro" className='list'>Pomodoro </a>
        <a href="/Support" className='list'>Support</a>
        <a href="/About" className='list'>About</a>
      </div>
    );
  }
   
  export default Navbar;