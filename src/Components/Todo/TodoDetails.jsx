import React from 'react'

const TodoDetails = ({ Todo }) => {
  return (
    <>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {Todo.title}
        </h2>
        <p className="text-gray-600 text-lg">
          {Todo.description}
        </p>
        <div className="mt-4 text-sm text-gray-500">
          وضعیت: {Todo.isCompleted ? 'انجام شده ✅' : 'انجام نشده ⏳'}
        </div>
      </div>

    </>
  )
}

export default TodoDetails