import React, { useState } from 'react'
import Sidebar from '../Components/Layout/Sidebar'
import MainContent from '../Components/Layout/MainContent'

const Home = () => {

  const Todos = [
    { id: 1, title: "Test", description: "lorem", isCompleted: false },
    { id: 2, title: "Test2", description: "lorem", isCompleted: false },
  ]
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="flex w-full max-w-6xl h-[800px] bg-gray-700 rounded-2xl shadow-xl overflow-hidden">

        <div className="w-[30%] bg-[#F9FAFB] border-r border-[#E5E7EB] overflow-y-auto">
          <Sidebar Todos={Todos} />
        </div>


        <div className="w-[70%] bg-white overflow-y-auto">
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default Home