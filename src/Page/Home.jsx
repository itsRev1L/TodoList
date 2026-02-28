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

  //States
  const [selectedTodo, setselectedTodo] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  //changes the "isComplete" 
  const toggleComplete = (id) => {
    setTodos(
      Todos.map((Todo) => {
        return Todo.id === id
          ? { ...Todo, isCompleted: !Todo.isCompleted }
          : Todo
      })
    )
  }
  //Add functions
  const handleAddClick = () => {
    setIsAdding(!isAdding)
  }
  //this function adds a new obj to main State
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
  //Edit/Update function
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
  //delete function
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
    <div className="min-h-screen bg-gray-100 font-sans">


      <button
        onClick={() => setShowMobileMenu(true)}
        className={`
          fixed top-1 left-4 z-50 bg-white p-2 rounded-lg shadow-md border border-gray-200 
          md:hidden 
          ${showMobileMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <HiMenu size={24} className="text-gray-700" />
      </button>


      <div className="hidden md:flex min-h-screen bg-gray-100 items-center justify-center p-4">
        <div className="flex w-full max-w-6xl h-[800px] bg-gray-700 rounded-2xl shadow-xl overflow-hidden">

          <div className="w-[30%] bg-[#F9FAFB] border-r border-[#E5E7EB] overflow-y-auto">
            <Sidebar
              Todos={Todos}
              onSelectTodo={setselectedTodo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              onAddClick={handleAddClick}
            />
          </div>


          <div className="w-[70%] bg-white overflow-y-auto">
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
        </div>
      </div>


      <div className="md:hidden min-h-screen bg-white">
        <MainContent
          selectedTodo={selectedTodo}
          isAdding={isAdding}
          addTodo={addTodo}
          onEditClick={handleEditClick}
          isEditing={isEditing}
          UpdateTodo={UpdateTodo}
          setIsEditing={setIsEditing}
          onMenuClick={() => setShowMobileMenu(true)}
        />
      </div>


      {showMobileMenu && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="absolute left-0 top-0 w-[280px] h-full bg-white overflow-y-auto">
            <Sidebar
              Todos={Todos}
              onSelectTodo={(todo) => {
                setselectedTodo(todo)
                setShowMobileMenu(false)
              }}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              onAddClick={handleAddClick}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home