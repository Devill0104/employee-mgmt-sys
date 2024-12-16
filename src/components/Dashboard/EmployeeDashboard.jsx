import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
 
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] text-white h-screen'>
         
            <Header data={data}/>
            <TaskListNumber data={data} />
            <TaskList data={data}></TaskList>
        </div>
    </div>
  )
}

export default EmployeeDashboard