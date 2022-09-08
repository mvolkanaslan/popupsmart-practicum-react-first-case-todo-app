import React, { useRef } from 'react'
import "./createTodo.css"
import { getCurrentDate as currentDate } from '../../utils/formattedDate';
import Icon from '../Icon/Icon';
import mockApi from "../../apis/mockapi"
import validation from '../../utils/validation';
import { toast } from 'react-toastify';
import ToastConfig from '../../utils/toastConfig.js';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../reducers/todoSlice';


export default function CreateTodo() {
    const dispatch = useDispatch()
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
                .then(data => {
                    createFormRef.current.reset()
                    dispatch(todoActions.addTodoToList(data))
                    // mockApi.getTodos()
                })
                .catch(err => toast.error(`Opps ! : ${err}`,ToastConfig))
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
