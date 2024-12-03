import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {AuthContext} from './context/AuthProvider'
import AuthProvider from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {


  const [user, setUser] = useState(null)
      // here email and password are not defined yet but if we will pass the email and password
      // where we are calling handleLogin which is the onsubmit of the login form , we can call it from there
    const handleLogin = (email,password) => {
          if(email == "admin@example.com" && password=="123"){
            console.log("this is admin")
            setUser("admin")
          }
          else if(email == "employee1@example.com" && password=="123") {
            console.log("this is employee")
            setUser("employee")
          }
          else{
            alert("Invalid credentials")
          }
    }
    






  // using useEffect to run the set fn and fill the details in the local stoarage
  // useEffect(() => {
  //   //fn setLocalstorage. getlocalstoaraeg can be called in from the useEffect hook that will call and run it parallely

  //   //if we wnat to set the data inlocal storage then we can run this fn
  //   // setLocalStorage()  

  //   // if we wanna get the data from localstorage then we will callthis fn
  //   // getLocalStorage()
  //   // console.log()
  // })

  const data = useContext(AuthContext)
  console.log(data)
  

  return (
    <>
      {/* if we dont have a user then show login otherwise keeping it blank for now */}
      {!user ? <Login handleLogin = {handleLogin}/>: ''}

      {/* //different Dashboard will appear as per the user type */}
      {user == 'admin' ?   <AdminDashboard/> : <EmployeeDashboard/> }
        
      {/* <AuthContext></AuthContext> */}

    </>
  
  )
}

export default App
