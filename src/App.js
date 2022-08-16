import React, { useState } from "react";
import List from "./component/List";

function App() {
  const taskContainer = [
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
  ]
  const [taskList, setTaskList] = useState(taskContainer);

  return(
    <div className="App">
      <header className="App-header">
        React To-Do List 
      </header>
      <form>
        <input></input>
        <input></input>
        <input></input>

        <button>Add Task</button>
      </form>
      <List list={taskList}></List>
    </div>
  )
}



export default App;