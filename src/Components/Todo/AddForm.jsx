import React, { useState } from 'react'

const AddForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      addTodo(title, description)
      setTitle('')
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col min-h-0">

      <div className="mb-3 sm:mb-4 ml-1 sm:ml-2">
        <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Title</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="w-full p-2 sm:p-3 bg-transparent focus:outline-none text-base sm:text-lg border-b border-gray-200"
          autoFocus
        />
      </div>

      <div className="flex-1 flex flex-col ml-1 sm:ml-2 ">
        <h4 className="text-base sm:text-xl font-semibold text-gray-700 mb-1 sm:mb-2">Description</h4>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description..."
          className="w-full flex-1 bg-transparent focus:outline-none resize-none p-2 text-sm sm:text-base border border-gray-200 rounded min-h-[200px] sm:min-h-0"
        />
      </div>

      <div className="flex justify-end mt-3 sm:mt-4 mb-3 sm:mb-6 mr-2 sm:mr-4">
        <button
          type="submit"
          className="px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-neutral-800 border-2 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>

    </form>
  )
}

export default AddForm