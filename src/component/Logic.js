import {React, useState} from "react";
import DataService from "./DataService";
import List from "./List";

function Logic() {{

    const testData =
        {
          "id": 4,
          "title": "Fourth Task",
          "completed": true
        }

    const [taskList, setTaskList] = useState(DataService);
    
    const addTask = ()=>{
        setTaskList(
            taskList.push(testData)
        )
        console.log(taskList)
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
        <button onClick={addTask}>Add Task</button>
        <List list={taskList}></List>
    </div>
    )
}}

export default Logic;