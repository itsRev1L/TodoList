import React, { useState } from 'react'
import Sidebar from '../Components/Layout/Sidebar'
import MainContent from '../Components/Layout/MainContent'

const Home = () => {

  const [Todos, setTodos] = useState([
    { id: 1, title: "Buy milk", description: "Buy groceries for the week", isCompleted: false },
    { id: 2, title: "Pay bills", description: "Need to finish the todo app with all features working.", isCompleted: false },
    { id: 3, title: "Read book", description: "Organize files and folders on desktop and documents.", isCompleted: true },
  ])
  const [selectedTodo, setselectedTodo] = useState(null);
  const toggleComplete = (id) => {
    setTodos(
      Todos.map((Todo) => {
        return Todo.id === id
          ? { ...Todo, isCompleted: !Todo.isCompleted }
          : Todo
      })
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="flex w-full max-w-6xl h-[800px] bg-gray-700 rounded-2xl shadow-xl overflow-hidden">


        <div className="w-[30%] bg-[#F9FAFB] border-r border-[#E5E7EB] overflow-y-auto">
          <Sidebar Todos={Todos} onSelectTodo={setselectedTodo} toggleComplete={toggleComplete} />
        </div>


        <div className="w-[70%] bg-white overflow-y-auto">
          <MainContent selectedTodo={selectedTodo} />
        </div>
      </div>
    </div>
  )
}

export default Home