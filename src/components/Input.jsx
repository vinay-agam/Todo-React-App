"use client";
import React from 'react'


function Input({ setTodos, todos }) {
    const eventSubmit=(e)=>{
        e.preventDefault();
        const value=e.target.todo.value;
        const newTodo={ title: value, id: self.crypto.randomUUID(), is_completed: false};
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        const updateTodoList=JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updateTodoList);
        
        e.target.reset(); 
    }
    setTodos
  return (
    <>
      <div className='flex justify-center items-center p-5 rounded-full bg-gray-900 w-full max-w-screen-md mx-auto'>
    <form htmlFor='task' className='w-full flex justify-center items-center gap-5 p-2' onSubmit={eventSubmit}>
        <label className='w-[80%]' htmlFor="task">
            <input type="text" required name="todo" id="todo" className='px-8 py-4 w-full rounded-full border-gray-800 outline-none border-2 bg-transparent text-white' placeholder='Add Task' />
        </label>

        <button type='submit' className='group px-2 py-4 w-[20%] rounded-full flex items-center justify-center bg-green-500 text-gray-900 font-bold hover:-translate-y-1 transform hover:shadow-sm  hover:shadow-white transition-all duration-300 ease-in-out'>
            <p className='md:flex hidden'>Add Task</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden flex group-hover:flex transition-all duration-800 ease-in-out">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

        </button>
    </form>

    </div>
    </>
  )
}

export default Input