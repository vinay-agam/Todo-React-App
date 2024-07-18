"use client";
import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import TaskDone from './components/TaskDone'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([]);

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const total_Todo = todos.length;
  const completed_Todo = todos.filter((todo) => todo.is_completed === true).length;

  return (
    <>
      <div className='bg-black w-full min-h-screen h-full pt-5 md:pt-12 flex flex-col gap-4 justify-center text-white'>
        <Header />
      
        <TaskDone completedTodo={completed_Todo} totalTodo={total_Todo}  />
        <Input setTodos={setTodos} todos={todos}/>
        <ToDoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
