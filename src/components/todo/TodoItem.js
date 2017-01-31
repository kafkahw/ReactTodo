import React from 'react';

export const TodoItem = ({isComplete, name}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={isComplete}/>
      {name}
    </li>
  );
};
