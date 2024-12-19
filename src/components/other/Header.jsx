import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {


  const logOutUser = ()=>{
    console.log('first')
    localStorage.setItem('loggedInUser','')
    window.location.reload()

  }
  // console.log(data)

  // const [username, setUsername] = useState('')
  // if(!data) {
  //   setUsername('Admin')
  // }else {
  //   setUsername(data.firstname)
  // }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>username</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded'> Log Out</button>
    </div>
  )
}

export default Header