import React from "react";
import Task from "./Task";

function List({list}) {{
    return (
        <div>
            {list.map(
                mappedTask =>{{
                    return (
                         <Task task={mappedTask}></Task>
                    )
                }},
                
            )}
        </div>
    );
}}

export default List;