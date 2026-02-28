import React from 'react'
import TodoDetails from '../Todo/TodoDetails'
import AddForm from '../Todo/AddForm'
import EditForm from '../Todo/EditForm'
import { HiMenu } from "react-icons/hi";

const MainContent = ({ selectedTodo, isAdding, addTodo, isEditing, UpdateTodo, setIsEditing, onEditClick, onMenuClick, setIsAdding }) => {
  return (
    <div className="h-full flex flex-col">

      <div className='flex items-center justify-between p-2 font-bold bg-[#F9FAFB] text-neutral-800 border-b border-gray-200 shrink-0 min-h-[48px]'>
        <div className="w-[60px] flex justify-start">
          <button
            onClick={onMenuClick}
            className="md:hidden p-1.5 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <HiMenu size={20} className="text-gray-700" />
          </button>
        </div>

        <h6 className='text-sm'>MainContent</h6>

        <div className="w-[60px] flex justify-end">
          {selectedTodo && !isAdding && !isEditing && (
            <button className='text-sm px-2 py-1 hover:bg-gray-200 rounded transition-colors whitespace-nowrap' onClick={onEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 min-h-0">
        {isAdding ? (
          <AddForm addTodo={addTodo} setIsAdding={setIsAdding} />
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
      </div>

    </div>
  )
}

export default MainContent