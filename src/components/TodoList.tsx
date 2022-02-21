import React from 'react';
import './style.css';
import {Todo} from '../model';


interface Props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = () => {
  return <div>
    
  </div>;
};

export default TodoList;
