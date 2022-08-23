const tasks =
    [
        {
          "id": 1,
          "title": "First Task",
          "completed": true
        },
    
        {
          "id": 2,
          "title": "Second Task",
          "completed": true
        },
    
        {
          "id": 3,
          "title": "Third Task",
          "completed": false
        }
    ];

const newTask =
    {
      "id": 4,
      "title": "Fourth Task",
      "completed": true
    }

const DataService = {
  
  lastId:0,
  
  getTasks: function(){
    return Promise.resolve(tasks)
  },
  
  getNewTask: function (){
    return new Promise(function (resolve,reject){
      if(newTask.id > DataService.lastId){
        resolve(newTask)
      }
      else{
        reject(newTask)
      }
    })
  }
};

export default DataService;