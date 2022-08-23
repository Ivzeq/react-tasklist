import { tasks, newTask } from "../data/TestData";

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