import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthContext from './context/AuthContext'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {

  // using useEffect to run the set fn and fill the details in the local stoarage
  useEffect(() => {
    //fn setLocalstorage. getlocalstoaraeg can be called in from the useEffect hook that will call and run it parallely

    //if we wnat to set the data inlocal storage then we can run this fn
    // setLocalStorage()  

    // if we wanna get the data from localstorage then we will callthis fn
    // getLocalStorage()
    // console.log()
  })
  

  return (
    <>
      <Login></Login>
      {/* <EmployeeDashboard></EmployeeDashboard> */}
      {/* <AdminDashboard></AdminDashboard> */}
      {/* <AuthContext></AuthContext> */}

    </>
  )
}

export default App
