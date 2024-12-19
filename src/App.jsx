import React, { Children, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {AuthContext} from './context/AuthProvider'
import AuthProvider from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {

  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  //getting the authorization data from authprovider
  //contains both the employees and admin data
  const authData = useContext(AuthContext)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      // console.log("user logged in hai")
      const userData = JSON.parse(loggedInUser)
      
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  
  }, [])
  

      // here email and password are not defined yet but if we will pass the email and password
      // where we are calling handleLogin which is the onsubmit of the login form , we can call it from there
    const handleLogin = (email,password) => {

          if(email == "admin@example.com" && password=="123"){
            console.log("this is admin")
            setUser('admin')
            localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
          }//for employee data, checking if data is present and then finding email and password

          else if(authData ) {

            //if authdata found, and so emp was found then match the emp email and password
            const employee =  authData.employees.find((e)=> e.email == email && e.password == password)

            if(employee) {
              console.log("this is employee")
              setUser('employee')

              //since empoyee contains data of particular emp so it can be found in the loggedinuser 
              setLoggedInUserData(employee)
              //setting user role and data in local storage
              localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee',  data:employee}))
            }
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

 
  

  return (
    <>
      {/* if we dont have a user then show login otherwise keeping it blank for now */}
      {!user ? <Login handleLogin = {handleLogin}/>: ''}

      {/* //different Dashboard will appear as per the user type */}
      {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ?  <EmployeeDashboard data={loggedInUserData} />: null) }
        
      {/* <AuthContext></AuthContext> */}

    </>
  
  )
}

export default App
