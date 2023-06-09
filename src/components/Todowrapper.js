import React from 'react'
import { useState } from 'react'
import Todoform from './Todoform'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditTodoform from './EditTodoform'
uuidv4()
export default function Todowrapper() {
    const [todos,setTodos] = useState([])
    const addtodo = (todo) => { 
        setTodos([...todos,{id :uuidv4(),task : todo, completed : false,isEditing : false}])
        console.log(todos)
     }
     const togglecomplete=(id) =>{
      setTodos(todos.map(todo=> todo.id === id ? {...todo,completed: !todo.completed}:todo))
     }
     const deletetodo=id=>{
      setTodos(todos.filter(todo => todo.id !== id))
     }
     const editTodo=id=>{
      setTodos(todos.map(todo=>todo.id=== id?{...todo,isEditing : ! todo.isEditing}:todo))
     }

     const editTask=(task,id)=>{
      setTodos(todos.map(todo=>todo.id ===  id? {...todo,task,isEditing : !todo.isEditing}:todo 
      ))
     }
  return (
    <div className='Todowrapper'>
        <Todoform addtodo={addtodo}/>
          {todos.map((todo, index) => (
            todo.isEditing?(<EditTodoform editTodo={editTask} task={todo}/>):(
              <Todo
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              isEditing={todo.isEditing}
              key={index}
              togglecomplete={togglecomplete}
              deletetodo={deletetodo}
              editTodo={editTodo}
            />
            )
            ))}
    </div>
  )
}
