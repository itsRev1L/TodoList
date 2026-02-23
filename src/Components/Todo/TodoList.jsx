import React from 'react'
import TodoListItems from './TodoListItems'

const TodoList = ({ Todos }) => {
  return (
    <div>
      {
        Todos.map(Todo => (
          <TodoListItems key={Todo.id} Todo={Todo} />
        ))

      }

    </div>
  )
}

export default TodoList