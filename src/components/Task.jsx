import React from 'react'
import { useState } from 'react'

export const Task = ({name, status, deleteTask, changeStatus}) => {
  return (
    <>
    <p>{name}</p>
    <div>
        {status ? <p>'Tarea completada'</p> 
        :
        <button onClick={() => {
            changeStatus();
        }}>Done</button>}
        
        <button onClick={() => {
            deleteTask();
        }}>Eliminar</button>
    </div>
    </>
  )
}
