import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { innerText, name, value, check, onChange, type } = this.props;
    return (
      <>
        <label htmlFor={name}>
          {innerText}
          <input
            checked={check}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            type={type}
          />
        </label>
      </>
    );
  }
}

export default Input;
