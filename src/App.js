import React,{useState,useEffect} from 'react';
import './App.css';
// Importing Components
import Form from './components/Form'
import ToDoList from './components/ToDoList'
  



function App() {
  
  // state stuff
  const[inputText, setInputText]=useState(" ");
  const [todos,setTodos]=useState([ ]);
  const [status,setStatus]=useState("all")
  const [filteredTodos,setFilteredTodos]=useState([  ])

  const filterHandler=()=>{
    switch(status){
      case'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true)) 
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false)) 
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  // use Effect
useEffect(()=>{
  getLocalTodos()
},  []);

useEffect(()=>{
  filterHandler();
  saveLocalTodos();
}  , [todos,status]);

  // save to Local
  const saveLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  }
  // method
  return (
    <div className="App">
      <header>
        <h1>Rio Todo List </h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      status={status}
      setStatus={setStatus}
      setFilteredTodos={setFilteredTodos}
      
      />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
