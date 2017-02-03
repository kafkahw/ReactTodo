import React, {PropTypes} from 'react';

export class Link extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    history.pushState(null, '', this.props.to);
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
}
