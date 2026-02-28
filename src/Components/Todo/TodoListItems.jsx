import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { RiTaskLine, RiTaskFill } from "react-icons/ri";

const TodoListItems = ({ Todo, onSelectTodo, toggleComplete, deleteTodo }) => {
  const handleComplete = () => {
    toggleComplete(Todo.id);
  }

  return (
    <div className="group flex items-center justify-between p-2 sm:p-3 bg-[#F5F5F5] hover:bg-[#e7e7e7] hover:border-[#4F46E5] transition-all cursor-pointer mb-1 sm:mb-2 mt-1 sm:mt-2 rounded-lg">

      <button className="text-[#232323] hover:text-[#000000] transition-colors cursor-pointer p-1" onClick={handleComplete}>
        {
          Todo.isCompleted ? <RiTaskFill size={18} className="sm:w-5 sm:h-5" /> : <RiTaskLine size={18} className="sm:w-5 sm:h-5" />
        }
      </button>

      <span
        className={`text-neutral-800 flex-1 text-left pl-2 sm:pl-3 text-sm sm:text-base ${Todo.isCompleted ? "line-through" : ""}`}
        onClick={() => onSelectTodo(Todo)}>
        {Todo.title}
      </span>

      <button className="text-black/80 hover:text-red-600 transition-colors  group-hover:opacity-100 cursor-pointer p-1"
        onClick={() => deleteTodo(Todo.id)}>
        <FaRegTrashAlt size={16} className="sm:w-4 sm:h-4" />
      </button>

    </div>
  )
}

export default TodoListItems