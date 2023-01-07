import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Programando en C#'),
        new Todo('Programando en javascript')
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log( state );
    console.log('InitStore');
}

export default {
    initStore
}