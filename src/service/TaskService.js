import { tasks } from "../data/TestData";

const DataService = {
  
  getTasks: function(){
    return Promise.resolve(tasks)
    //return Promise.reject(new Error('Hubo un error al obtener las tareas'))
  },
  addNewTask: function (body){
    const completed = false;
    const title = body.title;
    const newTask = [...tasks, {
      completed,
      title,
      id: tasks.length +1 
    }]

    return newTask;
  }
  
};

export default DataService;