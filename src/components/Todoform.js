import React from 'react';
import { useState } from 'react';

export default function Todoform({ addtodo }) {
  const [value, setvalue] = useState('');

  const handlechange = (event) => { 
    const capitalvalue = event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1)
    setvalue(capitalvalue);
  };

  const handlesubmit = (event) => { 
    event.preventDefault();
    addtodo(value);
    setvalue("");
  };

  return (<> <h1 style={{textAlign: "center",color :"white",marginTop:"2vh",fontFamily :"monospace",fontWeight :"bolder"}}></h1>
    <form className='Todoform' onSubmit={handlesubmit}>
     
      <div className='container'>
       
        <input
          type='text'
          className='input'
          value={value}
          placeholder='Enter the task to be done...'
          onChange={handlechange}
        />
        <button type='submit' className='button'style={{whiteSpace : "nowrap"}} >
          Add Task
        </button>
      </div>
    </form>
    </>
  );
}
