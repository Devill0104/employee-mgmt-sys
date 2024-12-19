import React from 'react'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'

const TaskList = ({data}) => {
  // console.log(data);
  return (

    <div id='tasklist' className='h-[50%]  overflow-x-auto w-full  mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap'>
        {/* <AcceptTask /> */}
       {data.tasks.map((elem, idx)=>{
        // console.log(elem)
         if(elem.active) {
          return <AcceptTask key={idx} />
        }
        if(elem.newtask) {
          return <NewTask  key={idx}/>
        }
        if(elem.completed) {
          return <CompleteTask  key={idx}/>
        }
        if(elem.failed) {
          return <FailedTask  key={idx}/>
        }

       })}
    </div>
  )
}

export default TaskList