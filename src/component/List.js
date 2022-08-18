import React from "react";
import Task from "./Task";

function List({list}) {{
    return (
        <div>
            {list.map(
                mappedTask =>{{
                    return (
                         <Task key= {mappedTask.id} task={mappedTask}></Task>
                    )
                }},
                
            )}
        </div>
    );
}}

export default List;