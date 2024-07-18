import React from 'react'
import Item from '../components/Item'

function ToDoList( {todos, setTodos} ) {
    

    return (
        <>
            <div className='flex justify-between items-center px-5 py-4 w-full max-w-screen-md mx-auto'>

                <ol className='w-full flex flex-col gap-4'>
                    {
                        todos && todos.length > 0 ? (todos?.slice().reverse().map((item, index) => 
                            (<Item key={index} item={item} todos={todos} setTodos={setTodos}/>)
                        )) : (<p>Seems lonely in here, what are you up to?</p>)
                    }
                    
                </ol>
            </div>
        </>
    )
}

export default ToDoList;