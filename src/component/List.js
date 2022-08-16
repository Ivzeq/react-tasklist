import React from "react";
import Task from "./Task";

function List({list}) {{
    return (
        <div>
            {list.map(
                mappedTask =>{{
                    return (
                        /*<div>
                             <p>
                                {mappedTask.id} - {mappedTask.title}
                                {mappedTask.completed === true ? 
                                <input type="checkbox" checked="false"></input>:
                                <input type="checkbox" checked="false"></input>}
                            </p>
                         </div>*/
                         <Task task={mappedTask}></Task>
                    )
                }},
                
            )}
        </div>
    );
}}

export default List;