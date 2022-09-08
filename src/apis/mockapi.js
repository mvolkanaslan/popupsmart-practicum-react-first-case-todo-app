import { todoActions } from "../reducers/todoSlice"
import { store } from "../store"

export default class mockApi {

    static getTodos = async () => {
        return await new Promise((resolve, reject) => {
            fetch(process.env.REACT_APP_BASE_API)
                .then(response => {
                    response.ok ?
                        response.json().then(data => {
                            store.dispatch(todoActions.setTodoList(data))
                            resolve(data)
                        }) :
                        response.json().then(err => reject(err))
                })
        })
    }

    static getTodoById = async (id) => {

        return await new Promise((resolve, reject) => {
            fetch(process.env.REACT_APP_BASE_API + `/${id}`)
                .then(response => {
                    response.ok ?
                        response.json().then(data => {
                            store.dispatch(todoActions.setTodoList(data))
                            resolve(data)
                        }) :
                        response.json().then(err => reject(err))
                })
        })

    }

    static addTodo = async (todo) => {

        return await new Promise((resolve, reject) => {
            fetch(process.env.REACT_APP_BASE_API, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(todo)
            }).then(response => {
                response.ok ? resolve(response.json()) :
                    response.json().then(err => reject(err))
            })
        })

    }

    static updateTodo = async (todo) => {

        return await new Promise((resolve, reject) => {
            fetch(process.env.REACT_APP_BASE_API + `/${todo.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            }).then(response => {
                response.ok ? resolve(response.json()) :
                    response.json().then(err => reject(err))
            })
        })
    }

    static deleteTodo = async (todo) => {
        return await new Promise((resolve, reject) => {
            fetch(process.env.REACT_APP_BASE_API + `/${todo.id}`, {
                method: "DELETE"
            }).then(response => {
                response.ok ? resolve(response.json()) :
                    response.json().then(err => reject(err))
            })
        })
    }

}