import React, {PropTypes} from 'react';
import {partial} from '../../lib/utils';

export const TodoItem = ({id, isComplete, name, handleToggle, handleRemove}) => {
  const handleChange = partial(handleToggle, id);
  const handleClick = partial(handleRemove, id);
  return (
    <li>
      <span className='delete-item'><a href="#" onClick={handleClick}>X</a></span>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={isComplete}
      />
      {name}
    </li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired,
};
