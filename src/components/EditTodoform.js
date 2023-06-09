import React from 'react';
import { useState } from 'react';

export default function EditTodoform({ editTodo,task }) {
  const [value, setvalue] = useState(task.task);

  const handlechange = (event) => { 
    const capitalvalue = event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1)
    setvalue(capitalvalue);
  };

  const handlesubmit = (event) => { 
    event.preventDefault();
    editTodo(value,task.id);
    setvalue("");
  };

  return (
    <form className='Todoform' onSubmit={handlesubmit}>
      <div className='container'>
        <input
          type='text'
          className='input'
          value={value}
          placeholder='Update task'
          onChange={handlechange}
        />
        <button type='submit' className='button' >
          Update
        </button>
      </div>
    </form>
  );
}
