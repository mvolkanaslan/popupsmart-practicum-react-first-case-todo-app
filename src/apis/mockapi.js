import { todoActions } from "../reducers/todoSlice"
import { store } from "../store"

export default class mockApi {

    static getTodos = async () => {
        await fetch(process.env.REACT_APP_BASE_API)
            .then(response => {
                response.ok ?
                    response.json().then(data => store.dispatch(todoActions.setTodoList(data))) :
                    response.json().then(err => console.log(err))
            })
    }

    static getTodoById = async (id) => {
        await fetch(process.env.REACT_APP_BASE_API + `/${id}`)
            .then(response => {
                response.ok ?
                    response.json().then(data => store.dispatch(todoActions.setTodoList(data))) :
                    response.json().then(err => console.log(err))
            })
    }

    static addTodo = async (todo) => {

        const result = await fetch(process.env.REACT_APP_BASE_API, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        })
        return result
    }
    
    static updateTodo = async (todo) => {
        const result = await fetch(process.env.REACT_APP_BASE_API + `/${todo.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        return result;
    }

    static deleteTodo = async (todo) => {
        const result = await fetch(process.env.REACT_APP_BASE_API + `/${todo.id}`, {
            method: "DELETE"
        })
        return result;
    }

}