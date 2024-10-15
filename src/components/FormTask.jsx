import React from 'react'
import { useState } from 'react'

export const FormTask = ({addTask}) => {
  const [form, setForm] = useState('')

  const newTask = () => {
    addTask(form);
    setForm('')
  }
  return (
    <div>
        <label htmlFor='add_task'>Add new task</label>
        <br></br>
        <input type='text' value={form} id='add_task' onChange={(e) => {
            setForm(e.target.value)
        }}></input>
        <br></br>
        <button onClick={() => newTask()} >Add task</button>
    </div>
  )
}
