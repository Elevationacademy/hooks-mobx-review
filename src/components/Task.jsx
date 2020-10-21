import React from 'react'
import { inject, observer } from 'mobx-react';

const Task = inject("todoStore")(observer((props) => {

    const update = () => {
        const newText = prompt("Insert new text")
        props.todoStore.updateTask(props.id, newText);
    }

    return (
        <div>
         <span>{props.text}</span>  
         <button onClick={update}>update</button> 
        </div>
    )
}))

export default Task
