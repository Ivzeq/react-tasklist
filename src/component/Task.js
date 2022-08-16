import React from "react";

function Task({task}) {{
    return(
        <div>
            <div>
                <p>
                    {task.id} - {task.title}
    
                    {task.completed === true ? 
                    <input type="checkbox" checked={true}></input>:
                    <input type="checkbox" checked={false}></input>}
                </p>
            </div> 
        </div>
    )
}}

export default Task;