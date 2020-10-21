import { observable, makeObservable, action } from 'mobx'
import Task from './Task'

class ToDoStore {
    tasks = [];
    constructor() {
        makeObservable(this, {
            tasks: observable,
            addTask: action
        })
    }

    addTask = (text) => {
        const task = new Task(text);
        this.tasks.push(task);
    }

    updateTask = (id, text) => {
        const task = this.tasks.find(t => t.id === id);
        task.text = text;
    }
}

export default ToDoStore;