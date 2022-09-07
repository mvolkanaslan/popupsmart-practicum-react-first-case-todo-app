import React, { useRef } from 'react'
import "./createTodo.css"
import { getCurrentDate as currentDate } from '../../utils/formattedDate';
import Icon from '../Icon/Icon';
import mockApi from "../../apis/mockapi"
import validation from '../../utils/validation';


export default function CreateTodo() {
    const { date, time } = currentDate();
    let todoTitle;
    const todoRef = useRef();
    const createFormRef = useRef();
    const addTodo = async (e) => {
        e.preventDefault();
        todoTitle = todoRef.current.value
        //validation control for todoTitle
        if (validation.todo(todoTitle)) {
            let todo = {
                title: todoTitle,
                createdDate: `${time} / ${date}`,
                complatedDate: "-- : --  /  -- -- -- --",
                isComplated: false
            }
            await mockApi.addTodo(todo)
                .then(response => {
                    //check request status ok
                    if (response.ok) {
                        //if todo added, reset form
                        createFormRef.current.reset()
                        //get current TodoList from api
                        mockApi.getTodos()
                    }
                    else response.json().then(err => console.log(err))
                })
        }


    }
    return (
        <div className="content">
            <form ref={createFormRef} onSubmit={addTodo}>
                <div className="input-group mb-1">
                    <input type="text" ref={todoRef} className="form-control" placeholder="Add To Do !" required />
                    <button type="Submit" className="input-group-text fw-bolder" ><Icon name="add" size={24} className="add-icon" /></button>
                </div>
            </form>
        </div>
    )
}
