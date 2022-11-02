import {createContext, useState, useEffect} from 'react'
import {tareas} from '../task'

export const TaskContext = createContext()


export function TaskContextProvider(props) {

  const [task, setTask]= useState([])
  
  useEffect(()=>{
    setTask(tareas);
  }, [])
  
  function createTask (taskTitle, taskDescription) {
    setTask([...task, {
      title: taskTitle,
      id: task.length,
      description: taskDescription
    }])
  }

  function deleteTask(taskId) {
    setTask(task.filter(t=>t.id !== taskId))
  }


  return (
    <TaskContext.Provider value={{
      task,
      createTask,
      deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
