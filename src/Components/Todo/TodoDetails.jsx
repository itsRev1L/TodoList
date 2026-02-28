import React from 'react'

const TodoDetails = ({ Todo }) => {
  return (
    <div className="h-full flex flex-col p-3 sm:p-4">

      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Title</h3>
        <div className="w-full p-2 sm:p-3 bg-transparent text-base sm:text-lg border-gray-200 wrap-break-word">
          {Todo.title}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Description</h4>
        <div className="w-full flex-1 bg-transparent p-2 text-sm sm:text-base text-gray-600 overflow-y-auto whitespace-pre-wrap wrap-break-word">
          {Todo.description}
        </div>
      </div>

      <div className="mt-4 text-xs sm:text-sm text-gray-500 flex justify-end">
        {Todo.isCompleted ? 'Completed' : 'ongoing'}
      </div>

    </div>
  )
}

export default TodoDetails