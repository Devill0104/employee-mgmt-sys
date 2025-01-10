import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // console.log(data.firstname);
 
  const logOutUser = ()=>{
    console.log(props.changeUser)

    //by changing user to empty the logout will now trigger the login page because we dont have any active user now
    props.changeUser('')
    // window.location.reload()

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
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>oo</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded'> Log Out</button>
    </div>
  )
}

export default Header