import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { RiTaskLine, RiTaskFill } from "react-icons/ri";

const TodoListItems = ({ Todo, onSelectTodo, toggleComplete }) => {
  const handleComplete = () => {
    toggleComplete(Todo.id);
  }
  return (
    <div className="group flex items-center justify-between p-3 bg-[#F5F5F5] hover:bg-[#e7e7e7] hover:border-[#4F46E5] transition-all cursor-pointer mb-2 mt-2">

      <button className="text-[#232323] hover:text-[#000000] transition-colors cursor-pointer" onClick={handleComplete}>
        {
          Todo.isCompleted ? <RiTaskFill size={20} /> : <RiTaskLine size={20} />

        }
      </button>



      <span
        className={`text-neutral-800 flex-1 text-left pl-3 ${Todo.isCompleted ? "line-through" : ""}`}
        onClick={() => onSelectTodo(Todo)}
      >
        {Todo.title}
      </span>

      <button className="text-black/80 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer">
        <FaRegTrashAlt />
      </button>

    </div >

  )
}

export default TodoListItems