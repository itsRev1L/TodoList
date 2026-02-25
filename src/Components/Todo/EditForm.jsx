import React, { useState } from 'react'

const EditForm = ({ todo, updateTodo, setIsEditing }) => {
  const [title, setTitle] = useState(todo.title)
  const [description, setDescription] = useState(todo.description)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      updateTodo(todo.id, title, description)
      setIsEditing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col">

      <div className="mb-4 ml-2">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Title</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="w-full p-3 bg-transparent focus:outline-none text-lg"
          autoFocus
        />
      </div>

      <div className="flex-1 flex flex-col ml-2">
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Description</h4>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description..."
          className="w-full flex-1 bg-transparent focus:outline-none resize-none p-2"
        />
      </div>

      <div className="flex justify-end gap-3 mt-4 mb-6 mr-4">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="px-6 py-2 text-neutral-800 border-2 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#6D5FF7] transition-colors"
        >
          Update
        </button>
      </div>

    </form>
  )
}

export default EditForm