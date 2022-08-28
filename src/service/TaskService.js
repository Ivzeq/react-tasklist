import { tasks } from "../data/TestData";

const DataService = {
  
  //Return initial list of tasks 
  getTasks: function(){
    return Promise.resolve(tasks)
    //return Promise.reject(new Error('Hubo un error al obtener las tareas'))
  },
  
  //Return full tasklist with new task
  addNewTask: function (body, lastTaskList){
    const completed = false;
    const title = body.title;

    const newTask = [...lastTaskList, {
      completed,
      title,
      id: lastTaskList.length +1 
    }]

    return Promise.resolve(newTask);
    //return Promise.reject(new Error('Hubo un error al cargar la tarea nueva'))
  }
  
};

export default DataService;