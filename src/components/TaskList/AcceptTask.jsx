import React from 'react'

const AcceptTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>High</h3>
            <h4 className='text-sm'>20 Feb, 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Complete your project</h2>
          <p className='text-sm mt-1'>complete the react project that you were working on previous week</p>
          <div className='flex justify-berween mt-4'>
            <button className='bg-green-500 py-2 px-2 text-sm'>Mark as completed</button>
            <button className='bg-red-500 py-2 px-2 text-sm'>Mark as failed</button>
          </div>
        </div>
  )
}

export default AcceptTask