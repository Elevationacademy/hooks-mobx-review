import React from 'react'
import Task from './Task'
import { inject, observer } from 'mobx-react';

const Tasks = inject("todoStore")(observer((props) => {
    return (
        <div>
            {props.todoStore.tasks.map(t =>
                (<Task key={t.id} {...t} />)
            )}
        </div>
    )
}))

export default Tasks
