const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Complete monthly report",
          "task date": "2024-11-01",
          "category": "Reporting"
        },
        {
          "active": false,
          "new task": false,
          "completed": true,
          "failed": false,
          "task description": "Update software",
          "task date": "2024-10-15",
          "category": "Maintenance"
        },
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Attend team meeting",
          "task date": "2024-11-03",
          "category": "Meeting"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Fix bug in system",
          "task date": "2024-11-02",
          "category": "Development"
        },
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Write unit tests for new feature",
          "task date": "2024-11-05",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Research market trends",
          "task date": "2024-11-04",
          "category": "Market Research"
        },
        {
          "active": false,
          "new task": false,
          "completed": true,
          "failed": false,
          "task description": "Prepare presentation slides",
          "task date": "2024-10-20",
          "category": "Presentations"
        },
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Analyze customer feedback",
          "task date": "2024-11-06",
          "category": "Customer Relations"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Create project timeline",
          "task date": "2024-11-07",
          "category": "Project Management"
        },
        {
          "active": false,
          "new task": false,
          "completed": true,
          "failed": false,
          "task description": "Finalize budget report",
          "task date": "2024-10-25",
          "category": "Finance"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Organize company event",
          "task date": "2024-11-10",
          "category": "Events"
        },
        {
          "active": false,
          "new task": false,
          "completed": true,
          "failed": false,
          "task description": "Create social media strategy",
          "task date": "2024-10-30",
          "category": "Marketing"
        },
        {
          "active": true,
          "new task": true,
          "completed": false,
          "failed": false,
          "task description": "Design email marketing campaign",
          "task date": "2024-11-12",
          "category": "Marketing"
        }
      ]
    }
  ]
  const admin = [{
    "name": "admin",
    "email" : "admin@example.com",
    "id": 1,
    "password": "123"
  }]
    
export const setLocalStorage = () => {
    // localStorage.setItem is a fn that can be used to set values of local storage variables
    //takes two parameters-> first parameter is the var name and ssecond one is the value
    //employees is a json object, directly passing the json data will show only objects as it is not readable 
    //so we will first convert it into string
    localStorage.setItem('employees',  JSON.stringify(employees))
    localStorage.setItem('admin',  JSON.stringify(admin))
}


//getLocal storage fn will be used to get the data from local stoarage
export const getLocalStorage = () => {
  //data will be shown as json object when it comes from this getITEM FN
  //to see the data as normal array we can use the json.parse
    const employees =  JSON.parse(localStorage.getItem('employees'))

    const admin =  JSON.parse(localStorage.getItem('admin'))

    console.log(admin, employees)
    
   
}