import React from 'react'
import TodoDetails from '../Todo/TodoDetails'
import AddForm from '../Todo/AddForm'
import EditForm from '../Todo/EditForm'
const MainContent = ({ selectedTodo, isAdding, addTodo, isEditing, UpdateTodo, setIsEditing, onEditClick }) => {
  return (
    <div className="h-full flex flex-col">


      <div className='grid grid-cols-3 items-center p-1 font-bold bg-[#F9FAFB] text-neutral-800'>
        <div></div>
        <h6 className='text-center'>MainContent</h6>
        <div className='text-right mr-5'>
          {selectedTodo &&
            <button className='cursor-pointer' onClick={onEditClick}>Edit</button>}
        </div>
      </div>


      <div className="flex-1">
        {isAdding ? (
          <AddForm addTodo={addTodo} />
        ) :
          isEditing && selectedTodo ?
            <EditForm
              todo={selectedTodo}
              updateTodo={UpdateTodo}
              setIsEditing={setIsEditing}
            />
            :
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