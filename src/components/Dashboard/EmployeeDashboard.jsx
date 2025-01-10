import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
 
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] text-white h-screen'>
         
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumber data={props.data} />
            <TaskList data={props.data}></TaskList>
        </div>
    </div>
  )
}

export default EmployeeDashboard