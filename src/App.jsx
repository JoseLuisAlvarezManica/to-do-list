import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { FormTask } from './components/FormTask'

function App() {

  
  return (
    <>
      <h1>ToDo list</h1>
      
      <ToDoList />
    </>
  )
}

export default App
