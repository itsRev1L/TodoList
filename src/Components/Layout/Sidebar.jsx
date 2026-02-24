import React from 'react'
import TodoList from '../Todo/TodoList'
import { IoMdAdd } from "react-icons/io";

const Sidebar = ({ Todos, onSelectTodo, toggleComplete, deleteTodo, onAddClick }) => {
  return (
    <section className="h-full flex flex-col">

      <div className="sticky top-0 bg-[#F9FAFB] z-10 p-2">

        <div className="flex items-center justify-between">
          <h6 className='font-bold text-neutral-800'>Sidebar</h6>
          <button className="text-neutral-800 rounded-3xl cursor-pointer" onClick={() => { onAddClick() }}>
            <IoMdAdd size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <TodoList
          Todos={Todos}
          onSelectTodo={onSelectTodo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>

    </section>
  )
}

export default Sidebar