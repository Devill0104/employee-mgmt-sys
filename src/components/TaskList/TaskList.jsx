import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%]  overflow-x-auto w-full  mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap'>
        <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>High</h3>
            <h4 className='text-sm'>20 Feb, 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Complete your project</h2>
          <p className='text-sm mt-1'>complete the react project that you were working on previous week</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>High</h3>
            <h4 className='text-sm'>20 Feb, 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Complete your project</h2>
          <p className='text-sm mt-1'>complete the react project that you were working on previous week</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>High</h3>
            <h4 className='text-sm'>20 Feb, 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Complete your project</h2>
          <p className='text-sm mt-1'>complete the react project that you were working on previous week</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>High</h3>
            <h4 className='text-sm'>20 Feb, 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Complete your project</h2>
          <p className='text-sm mt-1'>complete the react project that you were working on previous week</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-red-100 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>High</h3>
            <h4 className='text-sm'>20 Feb, 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Complete your project</h2>
          <p className='text-sm mt-1'>complete the react project that you were working on previous week</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-green-100 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1text-sm rounded'>High</h3>
            <h4 className='text-sm'>20 Feb, 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Complete your project</h2>
          <p className='text-sm mt-1'>complete the react project that you were working on previous week</p>
        </div>



        
        {/* <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '></div> */}

    </div>
  )
}

export default TaskList