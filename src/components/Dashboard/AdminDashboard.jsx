import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = (props) => {
  // console.log(data)
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser} data={props.data}></Header>
        <CreateTask></CreateTask>
        <AllTasks></AllTasks>
    </div>
  )
}

export default AdminDashboard