import React from 'react'
import TodoList from '../Todo/TodoList'

const Sidebar = ({ Todos }) => {
  return (
    <section>
      <h6 className='text-center p-1 font-bold text-neutral-800/70 '>Sidebar</h6>
      <TodoList Todos={Todos} />
    </section>
  )
}

export default Sidebar