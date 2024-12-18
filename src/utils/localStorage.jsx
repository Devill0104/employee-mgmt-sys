localStorage.clear()

const employees = [
  {
    "id": 1,
    "email": "e@e.com",
    "password": "123",
    "firstname": "Arjun",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Complete monthly report",
        "category": "Reporting"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "task description": "Update software",
        "category": "Maintenance"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Attend team meeting",
        "category": "Meeting"
      }
    ],
    "taskCounts": { "active": 2, "newtask": 2, "completed": 1, "failed": 0 }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstname": "Priya",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Fix bug in system",
        "category": "Development"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Write unit tests for new feature",
        "category": "Testing"
      }
    ],
    "taskCounts": { "active": 2, "newtask": 2, "completed": 0, "failed": 0 }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstname": "Rahul",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Research market trends",
        "category": "Market Research"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "task description": "Prepare presentation slides",
        "category": "Presentations"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Analyze customer feedback",
        "category": "Customer Relations"
      }
    ],
    "taskCounts": { "active": 2, "newtask": 2, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstname": "Neha",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Create project timeline",
        "category": "Project Management"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "task description": "Finalize budget report",
        "category": "Finance"
      }
    ],
    "taskCounts": { "active": 1, "newtask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstname": "Ananya",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Organize company event",
        "category": "Events"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "task description": "Create social media strategy",
        "category": "Marketing"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "task description": "Design email marketing campaign",
        "category": "Marketing"
      }
    ],
    "taskCounts": { "active": 2, "newtask": 2, "completed": 1, "failed": 0 }
  }
];

const admin = [
  {
    "name": "admin",
    "email": "admin@example.com",
    "id": 1,
    "password": "123"
  }
];

    
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

    //returning the employee and admin data
    return {admin, employees}
    
   
}