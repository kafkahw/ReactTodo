import React, {PropTypes} from 'react';
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

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
