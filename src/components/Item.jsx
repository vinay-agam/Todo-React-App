import React from 'react'

function Item({ item, setTodos, todos }) {
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);
    const completeTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id
                    ? { ...todo, is_completed: !todo.is_completed }
                    : todo
            )
        );
        const updatedTodos = JSON.stringify(todos);
  localStorage.setItem("todos", updatedTodos);
    };

    const handleEdit = () => {
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
        setEditing(true);
    };
    React.useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
            // position the cursor at the end of the text
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [editing]);
    const handleInpuSubmit = (event) => {
        event.preventDefault();
        const updatedTodos = JSON.stringify(todos);
  localStorage.setItem("todos", updatedTodos);
        setEditing(false);
    };
  
    const handleInputKey =(e)=> {
        if (e.key === 'Enter') {
            handleInputBlur(e);
        }
    };  

    const handleInputBlur = (e) => {
       
            e.preventDefault(); setTodos((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === item.id ? { ...todo, title: e.target.value ==="" ? todo.title : e.target.value } : todo
            )
          );
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
        setEditing(false);
        
    };
    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
        const updatedTodos = JSON.stringify(
            todos.filter((todo) => todo.id !== item.id)
          );
          localStorage.setItem("todos", updatedTodos);
      };
      
    return (<>
        <li id={item?.id} className='flex justify-between items-center bg-gray-900 rounded-full p-4 w-full'>
            {editing ? (
                <form className="edit-form" onSubmit={handleInpuSubmit}>
                    <label htmlFor="edit-todo">
                        <input
                         className='px-8 py-1 w-full rounded-full outline-none border-gray-800 border-2 bg-transparent text-white'
                            ref={inputRef}
                            type="text"
                            name="edit-todo"
                            id="edit-todo"
                            defaultValue={item?.title}
                            onBlur={handleInputBlur}
                            onKeyPress={handleInputKey}
                            
                        />
                    </label>
                </form>
            ) : (<>
                <div className='flex gap-5 items-center  ' onClick={completeTodo} >
                    <svg  className='size-10 shrink-0' viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="49" stroke='white' strokeWidth='2' fill={(item?.is_completed ? 'green' : 'none')} />

                    </svg>
                    <p className={(item?.is_completed ? 'line-through' : '') + " break-all"}>{item?.title}</p>
                </div>
                <div className='flex gap-5 items-center'>
                    <button onClick={handleEdit} className='text-white bg-orange-500 px-4 py-2 rounded-full hover:-translate-y-1 transform hover:shadow-sm hover:shadow-white transition-all duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                    </button>
                    <button onClick={handleDelete} className='text-white bg-[red] px-4 py-2 rounded-full  hover:-translate-y-1 transform hover:shadow-sm hover:shadow-white transition-all duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                </div></>
            )}

        </li></>)
}
export default Item;