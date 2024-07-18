import React from 'react'

function TaskDone({completedTodo, totalTodo}) {
  return (
    <>
      <div className='flex justify-between items-center px-10 py-4 rounded-full bg-gray-900 w-full max-w-screen-md mx-auto'>
      <div>
        <p className='font-bold text-2xl '>Task Done</p>
        <p className='text-green-400'>Keep it up</p>
      </div>
      <div className='flex p-4 rounded-full text-2xl bg-gray-800 text-green-600 justify-between items-center gap-5'>
        {completedTodo}/{totalTodo}
      </div>

    </div>
    </>
  )
}

export default TaskDone