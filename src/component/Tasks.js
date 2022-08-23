import {React, useState, useEffect} from "react";
import DataService from "../service/TaskService";
import TaskList from "./TaskList";

export default function Tasks() {

    //Declare useState
    const [taskList, setTaskList] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('pending');
    const [fetchError, setFetchError] = useState(null);
    const [taskTitle, setTaskTitle] = useState('');

    //Set state to inital data
    useEffect(() =>{
        setFetchStatus('inProgress')
        DataService.getTasks()
            .then((res)=>{
                setTaskList(res)
            })
            .catch((error)=>{
                setFetchError(error.message)
            })
            .finally(()=>{
                setFetchStatus('completed')
            })
    },[])

    //Set to new array that includes the extra task
    const taskHandler = (e)=>{
        e.preventDefault()
        DataService.addNewTask(
            {
            "title": taskTitle
            })
    }


    return(
        <div className="App">
            <header className="App-header">
            React To-Do List 
            </header>
            
            <form>
            <input type='text' placeholder="Descripcion de la tarea" onChange={(e)=>setTaskTitle(e.target.value)}></input>
            <button onClick={taskHandler}>Add Task</button>
            </form>

            {fetchStatus==='inProgress' && <p>In progress</p>}
            {fetchStatus === 'completed' && fetchError && <p>{fetchError}</p>}
            {!fetchError && fetchStatus === 'completed' && <TaskList list={taskList}></TaskList>}
        </div>
    )
}