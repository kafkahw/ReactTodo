import React, {PropTypes} from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = ({todos, handleToggle}) => {
  return (
    <div className="Todo-list">
      <ul>
        {todos.map(todo => <TodoItem handleToggle={handleToggle} key={todo.id} {...todo}/>)}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
