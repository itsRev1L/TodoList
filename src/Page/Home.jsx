import React, { useState } from 'react'
import Sidebar from '../Components/Layout/Sidebar'
import MainContent from '../Components/Layout/MainContent'
import { HiMenu } from "react-icons/hi";

const Home = () => {

  const [Todos, setTodos] = useState([
    { id: 1, title: "Buy milk", description: "Buy groceries for the week", isCompleted: false },
    { id: 2, title: "Pay bills", description: "Need to finish the todo app with all features working.", isCompleted: false },
    { id: 3, title: "Read book", description: "Organize files and folders on desktop and documents.", isCompleted: true },
  ])

  const [selectedTodo, setselectedTodo] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleComplete = (id) => {
    setTodos(
      Todos.map((Todo) => {
        return Todo.id === id
          ? { ...Todo, isCompleted: !Todo.isCompleted }
          : Todo
      })
    )
  }

  const handleAddClick = () => {
    setIsAdding(!isAdding)
  }

  const addTodo = (title, description) => {
    const newTodo =
    {
      id: Date.now(),
      title: title,
      description: description,
      isCompleted: false,
    }
    setTodos([...Todos, newTodo])
    setIsAdding(false)
  }

  const UpdateTodo = (id, newTitle, newDescription) => {
    setTodos(
      Todos.map((Todo) => (
        id === Todo.id ?
          { ...Todo, title: newTitle, description: newDescription }
          : Todo
      ))
    )
    setIsEditing(false)
  }

  const deleteTodo = (id) => {
    setTodos(
      Todos.filter(Todo => Todo.id !== id)
    )
    selectedTodo?.id === id ? setselectedTodo(null) : null
  }

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans relative">


      <div className={`
        fixed top-4 left-4 sm:hidden z-50
        ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        transition-opacity duration-300
      `}>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="bg-white text-black p-2 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all"
        >
          <HiMenu size={24} />
        </button>
      </div>


      <div className={`
        fixed sm:relative z-40 w-[80%] h-full bg-white
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        sm:translate-x-0 sm:w-[35%] md:w-[30%] shadow-xl sm:shadow-none
      `}>
        <Sidebar
          Todos={Todos}
          onSelectTodo={(todo) => {
            setselectedTodo(todo)
            setIsMenuOpen(false)
          }}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          onAddClick={handleAddClick}
        />
      </div>


      <div className="w-full sm:w-[65%] md:w-[70%] bg-white min-h-screen sm:ml-auto">
        <MainContent
          selectedTodo={selectedTodo}
          isAdding={isAdding}
          addTodo={addTodo}
          onEditClick={handleEditClick}
          isEditing={isEditing}
          UpdateTodo={UpdateTodo}
          setIsEditing={setIsEditing}
        />
      </div>


      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default Home