import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Todo from '../Todo/Todo'
import "./todoList.css"

export default function TodoList() {
    const todoList = useSelector(state=>state.todoList.todoList)

  return (
    <div className="todos">
            {
                todoList.map(todo=>{
                    return <Todo key={todo.id} todo={todo}/>
                })
            }
        </div>
  )
}
