import React from 'react'
import "./todo.css"
import { getCurrentDate as currentDate } from '../../utils/formattedDate';
import Icon from '../Icon/Icon';
import mockApi from '../../apis/mockapi';
import { toast } from 'react-toastify';
import ToastConfig from '../../utils/toastConfig.js';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../reducers/todoSlice';


export default function Todo(props) {
    const dispatch = useDispatch()
    const todo = props.todo;

    // update process used only complate stuation of the todo...
    const todoComplated = (todo) => {
        todo = {
            ...todo,
            complatedDate: !todo.isComplated ? `${currentDate().time} / ${currentDate().date}` : "-- : --  /  -- -- -- --",
            isComplated: !todo.isComplated,
        };
        mockApi.updateTodo(todo)
            .then(data => {
                dispatch(todoActions.updateTodo(data))
                // mockApi.getTodos() // cost on network
            })
            .catch(err => toast.error(`Opps ! : ${err}`, ToastConfig))
    }

    const deleteTodo = (todo) => {
        mockApi.deleteTodo(todo)
            .then(data => {
                dispatch(todoActions.deleteTodo(data))
                // mockApi.getTodos() // cost on network

            })
            .catch(err => toast.error(`Opps ! : ${err}`, ToastConfig))
    }


    return (
        <div className="todo card  mb-1">
            <div className="card-body d-flex justify-content-between py-1">
                <Icon size={20} name={todo.isComplated ? "circle-check" : "circle"} fill={todo.isComplated ? "#0eaf0e" : "currentColor"} onClick={() => todoComplated(todo)} className="complate"></Icon>
                <span type="button" className={todo.isComplated ? "todoTitle lineThrough" : "todoTitle"} data-bs-toggle="collapse" data-bs-target={`#T${todo.id}`} aria-expanded="false">{todo.title}</span>
                <Icon name="delete" size={20} onClick={() => deleteTodo(todo)} className="delete" />
            </div>
            <div className='collapse' id={`T${todo.id}`} >
                <div className="status">
                    <p className='mb-1'>{`Added : ${todo.createdDate}`}</p>
                    <p className='mb-1'>{`Complated : ${todo.complatedDate}`}</p>
                </div>
            </div>
        </div>
    )
}
