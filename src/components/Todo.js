import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todo({
  id,
  task,
  completed,
  isEditing,
  togglecomplete,
  deletetodo,
  editTodo,
}) {
  return (
    <div className={`${completed ? 'undo' : 'todo'}`} >
      
      <p
        onClick={() => {
          togglecomplete(id);
        }}
        className={`${completed ? 'completed' : ''}`}
        style={{  width: '30vw',wordWrap : "break-word" }}
      >
        {task}
      </p>
      <div>
        <FontAwesomeIcon
          onClick={() => editTodo(id)}
          icon={faPen}
          style={{ color: 'purple', marginRight: '4vw' ,}}
        />
        <FontAwesomeIcon
          onClick={() => deletetodo(id)}
          icon={faTrash}
          style={{ color: 'purple' }}
        />
      </div>
    </div>
  );
}
