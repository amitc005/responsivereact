import { observable } from "mobx"
class TodoStore {
    @observable todoList = [];
}

let todoStore = window.store = new TodoStore()
export default todoStore;
