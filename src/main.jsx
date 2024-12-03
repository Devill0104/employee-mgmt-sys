import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrapping the app component with auth and task contexts so that data will be available to all child elements */}
    
   <AuthProvider>
      <App />
   </AuthProvider>
         
        

  </React.StrictMode>,
)
