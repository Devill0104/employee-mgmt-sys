import React, {createContext , useState, useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    setLocalStorage()
    //this hook will call getlocalstorage and assign the employee and admin data to userdat var
    //this data gets passed on when authcontext is wrapping the childeren members
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
  }, [])
   
 

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider