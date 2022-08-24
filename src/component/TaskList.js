import React from "react";
import Task from "./Task";

export default function TaskList({list}) {{
    return (
        <ul>
            {list.map(
                mappedTask =>{{
                    return (
                         <Task key= {mappedTask.id} task={mappedTask}></Task>
                    )
                }},
                
            )}
        </ul>
    );
}}