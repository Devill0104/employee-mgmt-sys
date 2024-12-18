import React from 'react'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'

const TaskList = ({data}) => {
  console.log(data);
  return (
    <div id='tasklist' className='h-[50%]  overflow-x-auto w-full  mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap'>
        
       {data.tasks.map(()=>{
        return <h1>hello</h1>
       })}
    </div>
  )
}

export default TaskList