import TaskCard from './TaskCard';
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskList() {
  const {task} = useContext(TaskContext)

  if (task.length === 0){
    return <h1 className='text-gray-900 text-4xl font-bold text-center mt-3'>There are not taskes yet</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {task.map(t => (
        <TaskCard key={t.id} task={t}/>
      ))}
    </div>
  )
}

export default TaskList
