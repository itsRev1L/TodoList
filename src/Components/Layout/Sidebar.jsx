import React from 'react'
import TodoList from '../Todo/TodoList'

const Sidebar = ({ Todos, onSelectTodo, toggleComplete, deleteTodo }) => {
  return (
    <section>
      <h6 className='text-center p-1 font-bold text-neutral-800/70 '>Sidebar</h6>

      <TodoList Todos={Todos} onSelectTodo={onSelectTodo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </section>
  )
}

export default Sidebar