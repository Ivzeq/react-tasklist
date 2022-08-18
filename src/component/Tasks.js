import {React, useState, useEffect} from "react";
import DataService from "../service/TaskService";
import TaskList from "./TaskList";

export default function Tasks() {
    const testData =
        {
          "id": 4,
          "title": "Fourth Task",
          "completed": true
        }

    const [taskList, setTaskList] = useState([]);
     
    
    
    useEffect(
        () =>{
            DataService.getTasks()
             .then((res)=>{
                setTaskList(res)
        })
        },[]
    )

    const Handler = ()=>{
        const testVariable = [...taskList, testData]
        setTaskList(testVariable)
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
            <button onClick={Handler}
            >Add Task</button>
            <TaskList list={taskList}></TaskList>
        </div>
    )
}