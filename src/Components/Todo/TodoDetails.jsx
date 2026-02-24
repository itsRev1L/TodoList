import React from 'react'

const TodoDetails = ({ Todo }) => {
  return (
    <div className="h-full flex flex-col p-4">


      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Title</h3>
        <div className="w-full p-3 bg-transparent text-lg  border-gray-200">
          {Todo.title}
        </div>
      </div>




      <div className="flex-1 flex flex-col">
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Description</h4>
        <div className="w-full flex-1 bg-transparent p-2 text-gray-600 overflow-y-auto whitespace-pre-wrap">
          {Todo.description}
        </div>
      </div>

      {/* وضعیت */}
      <div className="mt-4 text-sm text-gray-500 flex justify-end">
        {Todo.isCompleted ? 'Completed' : 'ongoing'}
      </div>

    </div>
  )
}

export default TodoDetails