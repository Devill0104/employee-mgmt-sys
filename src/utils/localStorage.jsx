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
        "category": "Reporting",
        "taskDescription": "Complete monthly report",
        "taskTitle": "Complete",
        "taskDate": "27-10-2023"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "category": "Maintenance",
        "taskDescription": "Update software",
        "taskTitle": "Update",
        "taskDate": "27-10-2023"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "category": "Meeting",
        "taskDescription": "Attend team meeting",
        "taskTitle": "Attend",
        "taskDate": "27-10-2023"
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
        "category": "Development",
        "taskDescription": "Fix bug in system",
        "taskTitle": "Fix",
        "taskDate": "27-10-2023"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "category": "Testing",
        "taskDescription": "Write unit tests for new feature",
        "taskTitle": "Write",
        "taskDate": "27-10-2023"
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
        "category": "Market Research",
        "taskDescription": "Research market trends",
        "taskTitle": "Research",
        "taskDate": "27-10-2023"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "category": "Presentations",
        "taskDescription": "Prepare presentation slides",
        "taskTitle": "Prepare",
        "taskDate": "27-10-2023"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "category": "Customer Relations",
        "taskDescription": "Analyze customer feedback",
        "taskTitle": "Analyze",
        "taskDate": "27-10-2023"
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
        "category": "Project Management",
        "taskDescription": "Create project timeline",
        "taskTitle": "Create",
        "taskDate": "27-10-2023"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "category": "Finance",
        "taskDescription": "Finalize budget report",
        "taskTitle": "Finalize",
        "taskDate": "27-10-2023"
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
        "category": "Events",
        "taskDescription": "Organize company event",
        "taskTitle": "Organize",
        "taskDate": "27-10-2023"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "category": "Marketing",
        "taskDescription": "Create social media strategy",
        "taskTitle": "Create",
        "taskDate": "27-10-2023"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "category": "Marketing",
        "taskDescription": "Design email marketing campaign",
        "taskTitle": "Design",
        "taskDate": "27-10-2023"
      }
    ],
    "taskCounts": { "active": 2, "newtask": 2, "completed": 1, "failed": 0 }
  }
];


const admin = [
  {
    "name": "admin",
    "firstname" : "Atul",
    "email": "admin@example.com",
    "id": 1,
    "password": "123"
  }
];

    
export const setLocalStorage = () => {
  localStorage.clear()
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