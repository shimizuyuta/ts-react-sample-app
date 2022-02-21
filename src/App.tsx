// import React from 'react';
// import logo from './logo.svg';
import './App.css';



import React from 'react';
import InputFeild from './components/InputFeild';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';


const App: React.FC = () => {
  const [ todo,setTodo] = useState<string >('');
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    console.log(todos,'todo')
    if(todo){
      setTodos([...todos, {id:Date.now(),todo:todo,isDone:false }])
      setTodo('')
    }

  }

  return(
    <div className='App'>
      <span className="heading">
        taskify
      </span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
};

export default App;
