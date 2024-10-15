import React from 'react'
import { Task } from './Task'
import { useState } from 'react'
import { FormTask } from './FormTask'


export const ToDoList = () => {

    const [tasks, setTasks] = useState([
        {name: 'Task1', status: true},
        {name: 'Task2', status: false},
        {name: 'Task3', status: false}
    ]) 

    const addTask  = (name) =>{
        setTasks  ([...tasks, {name: name, status: false}])}

    const deleteTask = (index) =>{
        setTasks(tasks.filter((task, ind) => ind !== index))
    }

    const changeStatus = (index) =>{
        const aux = [...tasks];
        aux[index] = {...aux[index], status: !aux[index].status};
        setTasks(aux);
    }
    

    return (  
    <>
        <FormTask addTask={addTask}/>
        <h2>Tasks</h2>
        <h4>Actividad: Integrar la funcionalidad del ToDo list</h4>
        {tasks.map((task, index) => (
            <Task key={index} name={task.name} status={task.status} deleteTask={() => deleteTask(index)} changeStatus={() =>changeStatus(index)} />
        ))}
    </>
  )
}
