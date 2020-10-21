import { observable, makeObservable } from 'mobx';

class TaskStore {
    id;
    text;
    constructor(text) {
        this.id = TaskStore.counter++;
        this.text = text;
        makeObservable(this, {
            text: observable
        })
    }
}
TaskStore.counter = 0;

export default TaskStore;