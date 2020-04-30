import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { name, text, input = 'text', handler, value } = this.props;
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={input}
          name={name}
          id={name}
          value={value}
          onChange={handler}
        />
      </label>
    );
  }
}

export default Input;