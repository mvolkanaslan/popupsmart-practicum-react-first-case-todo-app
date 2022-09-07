import React from 'react'
import CreateTodo from '../CreateTodo/CreateTodo'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'

export default function ContentLayout() {
  return (
    <div className="container col-lg-4 col-md-6">
      <Header />
      <CreateTodo />
      <TodoList />
    </div>
  )
}
