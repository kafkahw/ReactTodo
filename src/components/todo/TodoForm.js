import React, {PropTypes} from 'react';

export const TodoForm = (props) => (
  <form>
    <input
      type="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}
    />
  </form>
);

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
