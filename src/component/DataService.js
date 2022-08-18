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


const DataService = {
  getTasks: function(){
    return Promise.resolve(tasks)
  }
};

export default DataService;