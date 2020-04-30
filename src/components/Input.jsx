import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { inputName, text, inputType, handler, value } = this.props;
    return (
      <label htmlFor={inputName}>
        {text}
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          value={value}
          onChange={handler}
        />
      </label>
    );
  }
}

export default Input;
