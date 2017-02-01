import React, {PropTypes} from 'react';
import {partial} from '../../lib/utils';

export const TodoItem = ({id, isComplete, name, handleToggle}) => {
  const handleChange = partial(handleToggle, id);
  return (
    <li>
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
