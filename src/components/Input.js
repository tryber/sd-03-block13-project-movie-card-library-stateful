import React, { Component } from 'react';


class Input extends Component {
  render() {
    const { innerText, name, value, onChange, type } = this.props;
    return (
      <label htmlFor={name}>
        {innerText}
        <input name={name} value={value} onChange={onChange} type={type} />
      </label>
    );
  }
}

export default Input;
