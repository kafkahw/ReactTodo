import React, {PropTypes} from 'react';

export const TodoItem = ({id, isComplete, name}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={isComplete}/>
      {name}
    </li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired,
};
