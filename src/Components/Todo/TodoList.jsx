import React from 'react'
import TodoListItems from './TodoListItems'

const TodoList = ({ Todos, onSelectTodo, toggleComplete, deleteTodo }) => {
  return (
    <div className="space-y-1 sm:space-y-2">
      {
        Todos.map(Todo => (
          <TodoListItems
            key={Todo.id}
            Todo={Todo}
            onSelectTodo={onSelectTodo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      }
    </div>
  )
}

export default TodoList