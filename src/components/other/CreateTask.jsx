import React from 'react'
import { useState } from 'react'

const CreateTask = () => {
  
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignto, setAssignto] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()

    setNewTask({taskTitle,taskDate,assignto,category,taskDescription,newTask:true,failed:false,completed:false,active:false})

    const data = JSON.parse(localStorage.getItem('employees'))
    data.forEach(function(elem){
        if(assignto == elem.firstname){
            elem.tasks.push(newTask)
            console.log(elem)
        }
            // console.log(elem.tasks)
            
    })
   
    setAssignto('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
    
  }

  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
    <form onSubmit={(e)=>{
        submitHandler(e)
    }} className='flex flex-wrap w-full  items-start justify-between'>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input value={taskTitle}
                 onChange={(e)=>{
                    setTaskTitle(e.target.value)
                 }}
                className='text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text " placeholder='make a design' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input value={taskDate}
                 onChange={(e)=>{
                    setTaskDate(e.target.value)
                 }}
                className='text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input  value={assignto}
                 onChange={(e)=>{
                    setAssignto(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text " placeholder='employee name' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input value={category}
                 onChange={(e)=>{
                    setCategory(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text " placeholder='design, dev etc.' />
            </div>
        </div>
        <div className='w-1/2 '>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={taskDescription}
                 onChange={(e)=>{
                    setTaskDescription(e.target.value)
                 }}
            className='w-full h-44 text-sm px-4  rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" ></textarea> 
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm mt-4 rounded w-full'>Create Task</button>
        </div> 
    </form>
</div>
  )
}

export default CreateTask