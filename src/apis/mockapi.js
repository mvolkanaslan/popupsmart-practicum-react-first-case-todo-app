export default class mockApi {

    static getTodos = async () => {
        await fetch(process.env.REACT_APP_BASE_API)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    static getTodoById = async (id) => {
        await fetch(process.env.REACT_APP_BASE_API + `/${id}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    static addTodo = async (todo) => {
        await fetch(process.env.REACT_APP_BASE_API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then((response) => response.json())
            .then((data) => {
                data === "Not found" && console.log('Error:', data);
            })
    }
    static updateTodo = async (todo) => {
        await fetch(process.env.REACT_APP_BASE_API+`/${todo.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then((response) => response.json())
            .then((data) => {
                data === "Not found" && console.log('Error:', data);
            })
    }

}