import React, { useState } from 'react'

const Login = () => {

  //state variables for email and password
  //we can set the intial value as the admin's data if we dont want write manual data when checking the usage of the product ex- useState('admin@1345.com')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const submitHandler = (e)=>{
        e.preventDefault()
        console.log("email is",email)
        console.log("passwoerd", password)
        //resetting to empty value after form gets submitted;
        setEmail('')
        setPassword('')
  } 

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600 rounded-xl'>
            <form onSubmit={(e) =>{
              submitHandler(e)
            }} className='flex flex-col items-center justify-center p-20'>
                <input required  
                       value={email} 
                       onChange = {(e)=>{
                                        setEmail(e.target.value)
                                      }}
                       className='text-white outline-none bg-transparent border-2 border-red-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400' type="email"  placeholder='enter your email'/>
                <input required  
                       value={password} 
                       onChange = {(e)=>{
                                    setPassword(e.target.value)
                                    }}
                       className='mt-6 text-white outline-none bg-transparent border-2 border-red-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400' type="password" placeholder="password" name="" id="" />
                <button className='mt-6 text-white outline-none bg-emerald-600 border-none  text-xl rounded-full py-2 px-8 w-full placeholder:text-white'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login