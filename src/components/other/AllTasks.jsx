import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTasks = () => {
  const authData = useContext(AuthContext)
  return (
    <div id='alltasksdiv' className='bg-[#1c1c1c1 p-5 rounded mt-5  '>
        <div className='bg-red-400 px-4 mb-2  py-2 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Tasks</h3>
            <h3 className='text-lg font-medium w-1/5 '>Active Tasks</h3>
            <h5 className='text-lg font-medium w-1/5 '>Completed Tasks</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed Tasks</h5>
        </div>
        <div className=''>
        {authData.employees.map(function(elem, idx){
           return <div className='border-2 border-emerald-500 bg-black-400 px-4 mb-2  py-2 flex justify-between rounded '  key={idx}>
            <h2 className='text-lg font-medium w-1/5 '>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.newtask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>

    </div>
  )
}

export default AllTasks