import React from "react";

export default function Task({task}) {{
    return(
        <div>
            <div>
                <p>
                    {task.id} - {task.title}
    
                    {task.completed === true ? 
                    <input onChange={() =>{}} type="checkbox" checked={true}></input>:
                    <input onChange={() =>{}} type="checkbox" checked={false}></input>}
                </p>
            </div> 
        </div>
    )
}}