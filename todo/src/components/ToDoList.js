import React from 'react'
import ToDo from './ToDo'

const todos = [
    {"description":"Einkaufen","done": false},
    {"description":"Lernen","done":false}
]

const ToDoList = () => {
  return (
    //todo-- every Element of the todos-list
    todos.map((todo)=>{
       return <ToDo description={todo.description} done={todo.done}></ToDo>
    })
  )
}

export default ToDoList