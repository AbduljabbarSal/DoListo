import React from 'react';
import { Todo } from "react-todo-component";

const TodoList = () => {
  return (
    <>
      <h1 className='home'>TodoList</h1>
      <p className='todoText'>
            ⚪ Add Any ToDoList Items Below!
      </p>
      <hr className='line'></hr>

      <div className='todoList'>

        <Todo></Todo>

      </div>
    </>

    );
  }
   
  export default TodoList;