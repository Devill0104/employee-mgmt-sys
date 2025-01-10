import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm mt-1'>{data.taskDescription}</p>
          <div className='flex justify-berween mt-4'>
            <button className='bg-green-500 py-2 m-1 px-2 text-sm  border-black rounded-md'>Mark as complete</button>
            <button className='bg-red-500 py-2 px-2 m-1 text-sm  border-black rounded-md'>Mark as failed</button>
          </div>
        </div>
  )
}

export default AcceptTask