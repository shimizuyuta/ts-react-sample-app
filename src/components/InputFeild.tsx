import React,{useRef} from 'react';
import './style.css'

interface Props {
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e: React.FormEvent)=>void;
}

const InputFeild: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e)=>{
      handleAdd(e) 
      inputRef.current?.blur()
    }}>  
      <input type="input" 
          ref={inputRef}
          placeholder='タスク追加' 
          className='input_box'
          value={todo}
          onChange={
            (e)=>setTodo(e.target.value)
          }
      />
      <button className='input_submit' type='submit'>
        go
      </button>
    </form>
  )
};

export default InputFeild;
