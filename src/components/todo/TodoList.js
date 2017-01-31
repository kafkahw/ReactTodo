import React from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = ({todos}) => {
  return (
    <div className="Todo-list">
      <ul>
        {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
      </ul>
    </div>
  );
};
