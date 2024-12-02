import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContext from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrapping the app component with auth and task contexts so that data will be available to all child elements */}
    
    <AuthContext>
        <TaskContext>
          <App />
        </TaskContext>
    </AuthContext>

  </React.StrictMode>,
)
