import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] text-white h-screen'>
            <Header></Header>
            <TaskListNumber></TaskListNumber>
            <TaskList></TaskList>
        </div>
    </div>
  )
}

export default EmployeeDashboard