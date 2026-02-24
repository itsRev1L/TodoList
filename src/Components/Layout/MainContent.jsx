import React from 'react'
import TodoDetails from '../Todo/TodoDetails'
import AddForm from '../Todo/AddForm'
const MainContent = ({ selectedTodo, isAdding, addTodo }) => {
  return (
    <div className="h-full flex flex-col">


      <div className='text-center p-1 font-bold bg-[#F9FAFB] text-neutral-800'>
        MainContent
      </div>


      <div className="flex-1">
        {isAdding ? (
          <AddForm addTodo={addTodo} />
        ) :

          selectedTodo ? (
            <TodoDetails Todo={selectedTodo} />
          ) : (
            <div className='flex justify-center items-center font-bold h-full'>
              <h1 className='text-black/70'>Select a Task</h1>
            </div>
          )
        }
      </div >

    </div >
  )
}

export default MainContent