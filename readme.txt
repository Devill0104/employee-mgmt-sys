context : a folder that will serve data as a centralized store of data and any component can get data from here
AuthContext.jsx: a file that will have all the authorization realted data like if there is an admin then all admin relate data will be stored there
localStorage.jsx : this file will have all the local starage related data
form-submit-handler : a callback has been defined that executes the submithander when form is submitted
AuthContext : data of each individual
taskContext :  will have all the data related to the tasks of an individual

** when we are submitting the login form then we are trigeering the handlesubmit fn, and when this fn runs it will prevent the 
   default behavior of the form using the prevent default method, also we will reset the value of email and password
   alongside it also call a fn named handlelogin which has 2 props email and password and these are passed from child to the 
   parent elememt which is also allowed, so these get received in handlelogin of the Login component and then the handleLogin fn
   gets called which receives the props and compares them with required fields and tells if login credential are right