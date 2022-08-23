import {React, useState, useEffect} from "react";
import DataService from "../service/TaskService";
import TaskList from "./TaskList";

export default function Tasks() {

    //Declare useState
    const [taskList, setTaskList] = useState([]);
     
    //Set state to inital data
    useEffect(() =>{
        DataService.getTasks()
            .then((res)=>{
                DataService.lastId = 3;
                setTaskList(res)
            })
    },[])

    //Set to new array that includes the extra task
    const taskHandler = ()=>{
        DataService.getNewTask()
            .then((res)=>{
                const newPromisedTask= res
                
                const finalArray = [...taskList, newPromisedTask]
                
                setTaskList(finalArray)
                DataService.lastId = finalArray[finalArray.length-1].id
            })
            .catch((res)=>{
                const newPromisedTask = res

                newPromisedTask.id = DataService.lastId + 1
                newPromisedTask.completed = false

                
                const finalArray = [...taskList, newPromisedTask]
                

                setTaskList(finalArray)
                DataService.lastId = finalArray[finalArray.length-1].id
            })
            .finally(()=>{
                
            })
    }


    return(
        <div className="App">
            <header className="App-header">
            React To-Do List 
            </header>
            
            <form>
            <input></input>
            <input></input>
            <input></input>
            </form>

            <button onClick={taskHandler}>Add Task</button>

            <TaskList list={taskList}></TaskList>
        </div>
    )
}