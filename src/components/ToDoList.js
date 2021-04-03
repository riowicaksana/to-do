import React from 'react';
//Import Components
import Todo from './Todo'

const ToDoList=(props)=>{
    console.log(props.filteredTodos)
    return(
    <div className="todo-container">
      <ul className="todo-list">
     {props.filteredTodos.map((todo)=>(
         <Todo 
        setTodos={props.setTodos} 
        todos={props.todos} 
        key={todo.id}
        complete={todo.completed}
        todo={todo}
        text={todo.text}/>
     ))}
      </ul>
      </div>
    );
};

export default ToDoList;