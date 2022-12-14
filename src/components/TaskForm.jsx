import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const {createTask} = useContext(TaskContext)


  const handleSubmit= (e)=> {
    e.preventDefault();
    createTask(title, description)
  }
  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className="bg-slate-600 p-10 mb-4">
          <h1 className='text-2xl font-bold text-white mb-3'>Add a new Task</h1>
          <input placeholder="type your task" onChange={(e)=>setTitle(e.target.value)} autoFocus className='bg-slate-400 p-3 w-full mb-2'/>
          <textarea placeholder='type description about the task' onChange={(e)=>setDescription(e.target.value)} className='bg-slate-400 p-3 w-full mb-2'></textarea>
          <button className='bg-indigo-600 px-3 py-1 text-white'>Save</button>
      </form>
    </div>
  )
}

export default TaskForm
